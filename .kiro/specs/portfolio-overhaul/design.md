# Design Document — Portfolio Overhaul

## Overview

This document describes the technical design for the portfolio-overhaul feature. The goal is to modernize the dependency stack, break the monolithic `Projects.js` into focused modules, establish a scalable pattern for adding new projects, and align the entire codebase with current React best practices — all without breaking the three existing routes or the visual output of any page.

The current codebase is a Create React App project using React 18 and react-router-dom v6 (already installed). The primary pain point is `Projects.js`: a ~983-line file that inlines all project data objects, all asset imports, and all rendering logic in one place. Every other issue (missing `alt` attributes, index-based keys, `console.log` calls, opaque location-state props) is a secondary concern that will be addressed systematically during the same pass.

---

## Architecture

### Current Architecture

```
App.js
├── BrowserRouter
│   ├── Route "portfolio/"          → MainPage
│   │   ├── NavBar
│   │   ├── Banner          (toRotate defined inside component)
│   │   ├── Skills          (all skill data hardcoded as JSX)
│   │   ├── Projects        (ALL project data inline, ALL imports inline)
│   │   │   └── ProjectCard (console.log, index keys, no alt on img)
│   │   ├── Contact
│   │   └── Footer
│   ├── Route "portfolio/project/"  → ProjectPage
│   │   ├── ProjectNavbar
│   │   ├── ProjectBanner   (receives opaque location.state object)
│   │   ├── ProjectInfo     (receives opaque location.state object)
│   │   ├── ProjectImages   (receives opaque location.state object)
│   │   └── Footer
│   └── Route "portfolio/CitizenTracker" → Tracker
```

### Target Architecture

```
App.js
├── BrowserRouter
│   ├── Route "portfolio/"          → MainPage
│   │   ├── NavBar
│   │   ├── Banner          (toRotate at module scope)
│   │   ├── Skills          (imports skillsData.js)
│   │   ├── Projects        (imports from Project_Registry only)
│   │   │   └── ProjectGrid (pure rendering, stable keys)
│   │   ├── Contact
│   │   └── Footer
│   ├── Route "portfolio/project/"  → ProjectPage
│   │   ├── ProjectNavbar
│   │   ├── ProjectBanner   (explicit named props)
│   │   ├── ProjectInfo     (explicit named props)
│   │   ├── ProjectImages   (explicit named props)
│   │   └── Footer
│   └── Route "portfolio/CitizenTracker" → Tracker

src/data/projects/
├── _template.js            (commented-out example object)
├── CorporationInc.js       (Project_Data_Module)
├── IdleDino.js
├── CoinKnight.js
├── Chiba.js
├── ConcreteFormwork.js
├── IllusionOfWeight.js
├── GetMeOut.js
├── JelloFellos.js
├── CitizenTracker.js
├── EmployeePolls.js
└── MyReads.js

src/data/
├── projectRegistry.js      (Project_Registry — single source of truth)
└── skillsData.js           (skills icon + label array)
```

---

## Components and Interfaces

### ProjectGrid

A new, pure presentational component. Receives an array of `ProjectData` objects and renders a Bootstrap `Row` of `ProjectCard` components.

```jsx
// src/components/ProjectGrid.jsx
export const ProjectGrid = ({ projects }) => (
  <Row>
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </Row>
);

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(ProjectDataShape).isRequired,
};
```

Key decisions:
- `key={project.title}` — stable, unique identifier from data (satisfies Req 4.2).
- No state, no effects — purely derived from props.

### Projects (refactored)

Responsible only for tab/category state and composing tabs with `ProjectGrid`. Imports data exclusively from `projectRegistry.js`.

```jsx
// src/components/Projects.jsx
import { gameProjects, frontEndProjects } from "../data/projectRegistry";
import { ProjectGrid } from "./ProjectGrid";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      {/* Tab.Container with two Nav.Links */}
      {/* Tab.Pane "first"  → <ProjectGrid projects={gameProjects} /> */}
      {/* Tab.Pane "second" → <ProjectGrid projects={frontEndProjects} /> */}
    </section>
  );
};
```

### ProjectCard (updated)

Remove `console.log`. Add `alt` text to `<img>`. The `nav` prop routing logic is preserved but cleaned up.

```jsx
export const ProjectCard = ({ title, projDescription, projectInfo, projTagline, imgUrl, imageList, buttonLink, nav }) => {
  const destination = nav ?? "project";
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3}>
      <NavLink to={destination} state={{ name: title, description: projDescription, projInfo: projectInfo,
          tagline: projTagline, images: imageList, imageUrl: imgUrl, btLink: buttonLink }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} thumbnail`} />
          <div className="proj-txtx">
            <h4 style={{ color: "white" }}>{title}</h4>
            <span style={{ color: "white" }}>{projTagline}</span>
          </div>
        </div>
      </NavLink>
    </Col>
  );
};
```

### ProjectPage (updated)

Destructures `location.state` at the top of the component and passes explicit named props to each child. This satisfies Req 4.7 and makes each child independently testable.

```jsx
export const ProjectPage = () => {
  const { name, description, tagline, images, imageUrl, btLink, projInfo } = useLocation().state ?? {};
  return (
    <div className="App">
      <ProjectNavbar />
      <ProjectBanner name={name} description={description} tagline={tagline} imageUrl={imageUrl} btLink={btLink} />
      <ProjectInfo projInfo={projInfo} />
      <ProjectImages images={images} />
      <Footer />
    </div>
  );
};
```

Child component signatures become:

```jsx
export const ProjectBanner = ({ name, description, tagline, imageUrl, btLink }) => { ... }
export const ProjectInfo   = ({ projInfo }) => { ... }
export const ProjectImages = ({ images }) => { ... }
```

### Skills (updated)

Imports from `skillsData.js` and maps over the array instead of hardcoding JSX items.

```jsx
// src/components/Skills.jsx
import { skillsData } from "../data/skillsData";

export const Skills = () => (
  <section className="skill" id="skills">
    <Carousel responsive={responsive} infinite={true} className="...">
      {skillsData.map(({ icon, label }) => (
        <div key={label} className="item">
          <img src={icon} alt={`${label} icon`} />
          <h5>{label}</h5>
        </div>
      ))}
    </Carousel>
  </section>
);
```

### Banner (updated)

Move `toRotate` to module scope. Fix the missing `text` and `loopNum` dependencies in the `useEffect` dependency array.

```jsx
// Module scope — not re-created on every render (Req 3.3)
const TO_ROTATE = ["Game Developer", "Game Designer", "Front-End Developer"];

export const Banner = () => {
  // ...
  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta]); // exhaustive deps (Req 4.6)
  // ...
};
```

---

## Data Models

### ProjectData Shape

Defined once in `src/data/projectDataShape.js` (or `projectDataShape.ts` if the project is migrated to TypeScript for this file). Used as PropTypes in JS components and as a TypeScript interface for compile-time checking.

```js
// src/data/projectDataShape.js
import PropTypes from "prop-types";

export const ImageItemShape = PropTypes.shape({
  image: PropTypes.any.isRequired,   // imported asset
  imageTitle: PropTypes.string.isRequired,
});

export const SubheadingShape = PropTypes.shape({
  headerName: PropTypes.string.isRequired,
  textBlurb: PropTypes.arrayOf(PropTypes.string),
  listItems: PropTypes.arrayOf(PropTypes.string),
  videos: PropTypes.arrayOf(PropTypes.any),
});

export const ProjectInfoSectionShape = PropTypes.shape({
  headerName: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string),
  subheadings: PropTypes.arrayOf(SubheadingShape),
});

// The canonical shape every Project_Data_Module must satisfy
export const ProjectDataShape = PropTypes.shape({
  // Required
  title:           PropTypes.string.isRequired,
  projTagline:     PropTypes.string.isRequired,
  projDescription: PropTypes.string.isRequired,
  imgUrl:          PropTypes.any.isRequired,
  // Optional
  imageList:   PropTypes.arrayOf(ImageItemShape),
  buttonLink:  PropTypes.string,
  projectInfo: PropTypes.arrayOf(ProjectInfoSectionShape),
  nav:         PropTypes.string,
});
```

TypeScript equivalent (for compile-time enforcement, Req 2.5):

```ts
// src/data/projectDataShape.ts
export interface ImageItem {
  image: string;
  imageTitle: string;
}

export interface Subheading {
  headerName: string;
  textBlurb?: string[];
  listItems?: string[];
  videos?: string[];
}

export interface ProjectInfoSection {
  headerName: string;
  listItems?: string[];
  subheadings?: Subheading[];
}

export interface ProjectData {
  // Required
  title: string;
  projTagline: string;
  projDescription: string;
  imgUrl: string;
  // Optional
  imageList?: ImageItem[];
  buttonLink?: string;
  projectInfo?: ProjectInfoSection[];
  nav?: string;
}
```

### Project_Data_Module structure

Each file under `src/data/projects/` follows this pattern:

```js
// src/data/projects/CoinKnight.js
import coinKnight from "../../assets/img/Projects/coinknightmenu.png";
import { Platformer1, Platformer2, Boss1, Boss2, Death } from "../../assets/img/Projects/CoinKnight";
// ... other asset imports

/** @type {import('../projectDataShape').ProjectData} */
const CoinKnight = {
  title: "Coin Knight",
  projTagline: "Unity 2D Platformer",
  projDescription: "...",
  imgUrl: coinKnight,
  buttonLink: "https://sirflipper.itch.io/coin-knight",
  imageList: [ ... ],
  projectInfo: [ ... ],
};

export default CoinKnight;
```

### Project_Registry structure

```js
// src/data/projectRegistry.js

/**
 * HOW TO ADD A NEW PROJECT
 * ========================
 * 1. Create a new file in src/data/projects/ (copy _template.js as a starting point).
 * 2. Fill in all required fields (title, projTagline, projDescription, imgUrl) and any
 *    optional fields you need (imageList, buttonLink, projectInfo, nav).
 * 3. Import your new module below in the "Project imports" section.
 * 4. Add the imported constant to the correct category array:
 *    - gameProjects      → games, interactive experiences, VR projects
 *    - frontEndProjects  → web apps, React apps, TypeScript projects
 * That's it — the Projects component and ProjectCard will pick it up automatically.
 */

// --- Project imports ---
import CorporationInc  from "./projects/CorporationInc";
import IdleDino        from "./projects/IdleDino";
import CoinKnight      from "./projects/CoinKnight";
import Chiba           from "./projects/Chiba";
import ConcreteFormwork from "./projects/ConcreteFormwork";
import IllusionOfWeight from "./projects/IllusionOfWeight";
import GetMeOut        from "./projects/GetMeOut";
import JelloFellos     from "./projects/JelloFellos";
import CitizenTracker  from "./projects/CitizenTracker";
import EmployeePolls   from "./projects/EmployeePolls";
import MyReads         from "./projects/MyReads";

export const gameProjects = [
  CorporationInc,
  IdleDino,
  CoinKnight,
  Chiba,
  ConcreteFormwork,
  IllusionOfWeight,
  GetMeOut,
  JelloFellos,
];

export const frontEndProjects = [
  CitizenTracker,
  EmployeePolls,
  MyReads,
];
```

### skillsData structure

```js
// src/data/skillsData.js
import reactIcon    from "../assets/img/React-icon.png";
import csharp       from "../assets/img/csharp-icon.png";
import unity        from "../assets/img/unity-icon.png";
import gamedesign   from "../assets/img/game-design.png";
import uiux         from "../assets/img/uiuxicon.png";
import word         from "../assets/img/word-icon.png";
import excel        from "../assets/img/excel-icon.png";
import powerpoint   from "../assets/img/powerpoint-icon.png";

export const skillsData = [
  { icon: reactIcon,   label: "React" },
  { icon: unity,       label: "Unity Game Engine" },
  { icon: csharp,      label: "C#" },
  { icon: reactIcon,   label: "React Native" },
  { icon: gamedesign,  label: "Game Design" },
  { icon: uiux,        label: "UI/UX Design" },
  { icon: word,        label: "Word Certified" },
  { icon: excel,       label: "Excel Certified" },
  { icon: powerpoint,  label: "PowerPoint Certified" },
];
```

---

## Routing Changes (react-router-dom v6)

The project already has react-router-dom v6.3.0 installed and `App.js` already uses the v6 `<Routes>` / `<Route>` API. No routing API migration is needed.

The three routes are preserved exactly:

| Path | Component |
|---|---|
| `portfolio/` | `MainPage` |
| `portfolio/project/` | `ProjectPage` |
| `portfolio/CitizenTracker` | `Tracker` |

The only routing-related change is in `ProjectCard`: the hardcoded `"CitizenTracker"` string in the `nav !== ""` branch is replaced by using the `nav` prop value directly (which is already `"portfolio/CitizenTracker"` in the CitizenTracker data module). This removes the special-case branch entirely:

```jsx
// Before: two NavLink branches based on nav === ""
// After: single NavLink, destination derived from nav prop
const destination = nav ?? "project";
<NavLink to={destination} state={{ ... }}>
```

The `Banner.js` file imports `BrowserRouter as Router` but never uses it — this dead import is removed as part of the cleanup.

---

## Dependency Audit

Based on a review of `package.json` and the source files:

| Package | Action | Reason |
|---|---|---|
| `react` | Keep at `^18.1.0` | Already React 18 (Req 1.4 satisfied) |
| `react-dom` | Keep at `^18.1.0` | Matches React version |
| `react-router-dom` | Keep at `^6.3.0` | Already v6 (Req 1.5 satisfied) |
| `react-scripts` | Keep at `5.0.1` | CRA toolchain; major update to v6 is out of scope |
| `cors`, `express`, `nodemailer` | Audit | Used in `server.js` (backend email handler); keep if server.js is deployed, otherwise remove |
| `react-mailchimp-subscribe` | Audit | Check if used in Contact or Newsletter components |
| `typescript` | Keep | Used for `Tracker.tsx` |
| All others | Keep | Actively used in components |

The full dead-dependency audit (step 1 of the migration) will grep each package name against `src/` imports and flag any with zero references.

---

## Migration Strategy

The refactor is ordered to keep the app buildable and visually identical at every step. Each phase can be committed independently.

### Phase 1 — Dependency Audit (no visual change)
1. Run `npm outdated` and cross-reference with requirements.
2. Grep each package in `package.json` against `src/` to identify dead dependencies.
3. Remove confirmed dead dependencies; add `// TODO:` comments on any that cannot be updated.
4. Run `npm run build` to verify clean build.

### Phase 2 — Data Layer (no visual change)
1. Create `src/data/` directory.
2. Create `src/data/projectDataShape.js` with PropTypes definitions.
3. Create one `Project_Data_Module` per project by extracting the inline data objects and their asset imports from `Projects.js`.
4. Create `src/data/projectRegistry.js` with the how-to comment block and the two category arrays.
5. Create `src/data/skillsData.js`.
6. Create `src/data/projects/_template.js`.
7. Run `npm run build` — `Projects.js` still uses its own inline data at this point, so nothing breaks.

### Phase 3 — Component Split (visual parity required)
1. Create `src/components/ProjectGrid.jsx` using data from the registry.
2. Refactor `Projects.js` to import from `projectRegistry.js` and use `ProjectGrid`. Remove all inline data and asset imports.
3. Update `Skills.js` to import from `skillsData.js`.
4. Move `toRotate` to module scope in `Banner.js`; fix `useEffect` deps.
5. Run `npm run build` and visually verify the main page.

### Phase 4 — ProjectPage Props (visual parity required)
1. Update `ProjectPage.js` to destructure `location.state` and pass explicit props.
2. Update `ProjectBanner`, `ProjectInfo`, `ProjectImages` signatures to accept named props.
3. Run `npm run build` and navigate to a project detail page to verify.

### Phase 5 — Code Quality Pass
1. Remove all `console.log` calls from component files.
2. Add `alt` attributes to all `<img>` elements.
3. Replace index-based `key` props with `project.title` (or equivalent stable id).
4. Remove dead imports (`BrowserRouter as Router` in `Banner.js`, `ProjectNavbar` unused `project` prop, etc.).
5. Fix `useEffect` dependency arrays across all components.
6. Run ESLint with `react-hooks/exhaustive-deps` enabled; fix all violations.
7. Final `npm run build` — must exit 0.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: All registry entries conform to the ProjectData shape

*For any* project data object exported from a module in `src/data/projects/` and registered in `projectRegistry.js`, the object must have all required fields (`title`, `projTagline`, `projDescription`, `imgUrl`) present and of the correct type.

**Validates: Requirements 2.3**

### Property 2: Registry-driven rendering — any valid project appears in the grid

*For any* valid `ProjectData` object added to the `gameProjects` array in the registry, rendering the `Projects` component should produce a `ProjectCard` whose title matches that project's `title` field, without any modification to `Projects.js`, `ProjectCard.js`, or `ProjectPage.js`.

**Validates: Requirements 2.2, 5.2**

### Property 3: Stable keys — no index-based keys in project lists

*For any* array of project data objects passed to `ProjectGrid`, every rendered `ProjectCard` must have a `key` prop equal to `project.title`, and no two cards in the same list may share the same key.

**Validates: Requirements 4.2**

### Property 4: Explicit props round-trip — ProjectPage children render correctly for any project

*For any* valid `ProjectData` object, passing its fields as explicit named props to `ProjectBanner`, `ProjectInfo`, and `ProjectImages` must render the same visible output as the previous approach of passing the whole `location.state` object.

**Validates: Requirements 4.7**

### Property 5: Image alt text — all informational images have non-empty alt attributes

*For any* `ProjectData` object rendered through `ProjectCard` or `ProjectBanner`, every `<img>` element that displays project-specific content must have a non-empty `alt` attribute.

**Validates: Requirements 4.4**

---

## Error Handling

**Missing required fields in a Project_Data_Module**: PropTypes will emit a console warning in development. TypeScript (via the JSDoc `@type` annotation) will surface a compile error if the file is type-checked. The `_template.js` and the registry comment block prevent this at authoring time.

**`location.state` is null on direct navigation to `/portfolio/project/`**: After the ProjectPage refactor, destructuring `useLocation().state ?? {}` with nullish coalescing prevents a crash. Each child component should handle `undefined` props gracefully (e.g., `images?.map(...)` already used in `ProjectImages`).

**Build failures after dependency updates**: Phase 1 ends with a mandatory `npm run build` gate. Any breaking change is caught before touching component code.

**Dead asset imports**: When extracting a Project_Data_Module, any asset that is imported but not referenced in the data object will be caught by the bundler's tree-shaking and will not appear in the build output. A linter pass (Phase 5) will remove them from source.

---

## Testing Strategy

This feature is primarily a structural refactor. The testing approach is:

**Static analysis (smoke checks)**:
- `npm run build` exits 0 after each phase — the primary regression gate.
- ESLint with `react-hooks/exhaustive-deps` rule: zero violations after Phase 5.
- Grep for banned patterns: `console.log` in `src/components/`, `class.*extends.*Component` in `src/`, v5 router APIs (`Switch`, `useHistory`, `Redirect`).
- Grep for dead dependencies: each package in `package.json` has at least one `import`/`require` reference under `src/`.

**Example-based unit tests**:
- Import `projectRegistry.js` and assert it exports `gameProjects` and `frontEndProjects` as non-empty arrays.
- Render `App` with `MemoryRouter` at each of the three paths and assert the correct top-level component is mounted (preserves Req 3.5).

**Property-based tests** (using a library such as `fast-check`):

*Property 1 — Schema conformance*: Iterate every entry in `[...gameProjects, ...frontEndProjects]` and assert each has `title` (string), `projTagline` (string), `projDescription` (string), and `imgUrl` (truthy). This is effectively a property over the set of all registered projects.

*Property 2 — Registry-driven rendering*: Use `fast-check` to generate arbitrary `ProjectData` objects (with required fields), inject them into a test registry, render `Projects`, and assert a card with the matching title is present. Minimum 100 iterations.

*Property 3 — Stable keys*: Generate arrays of `ProjectData` objects with unique titles, render `ProjectGrid`, and assert no React key warning is emitted and each card's key equals its title. Minimum 100 iterations.

*Property 4 — Explicit props round-trip*: Generate arbitrary `ProjectData` objects, render `ProjectBanner` / `ProjectInfo` / `ProjectImages` with explicit props, and assert the rendered output contains the expected title, tagline, and description strings. Minimum 100 iterations.

*Property 5 — Alt text*: Generate arbitrary `ProjectData` objects, render `ProjectCard` and `ProjectBanner`, query all `<img>` elements, and assert none have an empty or missing `alt` attribute. Minimum 100 iterations.

**Tag format for property tests**: `// Feature: portfolio-overhaul, Property {N}: {property_text}`

PBT is appropriate here because the data-driven rendering logic (Properties 2–5) has a large input space (any valid project object), and 100 iterations will surface edge cases like projects with special characters in titles, missing optional fields, or empty `imageList` arrays that a handful of hand-written examples would miss.
