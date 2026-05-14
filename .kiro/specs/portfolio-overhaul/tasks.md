# Implementation Plan: Portfolio Overhaul

## Overview

Refactor the portfolio from a monolithic `Projects.js` into a clean, data-driven architecture across five ordered phases. Each phase ends with a passing `npm run build` so the app stays deployable at every commit. Property-based tests (fast-check) validate the five correctness properties defined in the design.

---

## Tasks

- [x] 1. Phase 1 — Dependency Audit
  - [x] 1.1 Audit and remove dead dependencies
    - Grep each package in `package.json` against `src/` imports; list packages with zero references
    - Remove confirmed dead packages from `package.json` (candidates: `react-mailchimp-subscribe`, `cors`, `express`, `nodemailer` if `server.js` is not deployed)
    - Add `// TODO:` inline comment on any dependency that cannot be updated due to a breaking change, stating the reason
    - _Requirements: 1.1, 1.2, 1.3_
  - [x] 1.2 Verify clean build after dependency changes
    - Run `npm run build` and confirm it exits 0 with output in `build/`
    - Grep `src/` for any v5 router APIs (`Switch`, `useHistory`, `Redirect`) and confirm none exist
    - _Requirements: 1.4, 1.5, 1.6_

- [x] 2. Phase 2 — Data Layer
  - [x] 2.1 Create `src/data/projectDataShape.js` with PropTypes definitions
    - Define and export `ImageItemShape`, `SubheadingShape`, `ProjectInfoSectionShape`, and `ProjectDataShape` using `prop-types`
    - _Requirements: 2.3_
  - [x] 2.2 Create `src/data/skillsData.js`
    - Export a named `skillsData` array of `{ icon, label }` objects, moving all skill entries out of `Skills.js`
    - _Requirements: 3.2_
  - [x] 2.3 Create `src/data/projects/_template.js`
    - Export a commented-out example object showing every required field with a placeholder value and every optional field with a description of its purpose and expected shape
    - _Requirements: 5.3_
  - [x] 2.4 Extract each project into its own `src/data/projects/<ProjectName>.js` module
    - Create one file per project: `CorporationInc.js`, `IdleDino.js`, `CoinKnight.js`, `Chiba.js`, `ConcreteFormwork.js`, `IllusionOfWeight.js`, `GetMeOut.js`, `JelloFellos.js`, `CitizenTracker.js`, `EmployeePolls.js`, `MyReads.js`
    - Each file moves its asset imports from `Projects.js` and exports a single default object with a `/** @type {import('../projectDataShape').ProjectData} */` JSDoc annotation
    - _Requirements: 2.2, 2.3, 2.4_
  - [x] 2.5 Create `src/data/projectRegistry.js`
    - Import all 11 project modules; export `gameProjects` and `frontEndProjects` named arrays
    - Include the how-to comment block at the top describing the four steps to add a new project
    - _Requirements: 2.1, 2.2, 5.1_
  - [x] 2.6 Write property test for schema conformance (Property 1)
    - Install `fast-check` as a dev dependency if not present
    - Iterate every entry in `[...gameProjects, ...frontEndProjects]` and assert each has `title` (string), `projTagline` (string), `projDescription` (string), and `imgUrl` (truthy)
    - Tag: `// Feature: portfolio-overhaul, Property 1: All registry entries conform to the ProjectData shape`
    - **Property 1: All registry entries conform to the ProjectData shape**
    - **Validates: Requirements 2.3**
  - [x] 2.7 Verify build is still clean (data layer only, no component changes yet)
    - Run `npm run build` and confirm it exits 0
    - _Requirements: 1.6_

- [x] 3. Phase 3 — Component Split
  - [x] 3.1 Create `src/components/ProjectGrid.jsx`
    - Pure presentational component: accepts a `projects` prop (array of `ProjectDataShape`) and renders a Bootstrap `Row` of `ProjectCard` components
    - Use `key={project.title}` on each `ProjectCard`
    - Add `ProjectGrid.propTypes` using `ProjectDataShape`
    - _Requirements: 3.1, 4.2_
  - [x] 3.2 Write property test for registry-driven rendering (Property 2)
    - Use `fast-check` to generate arbitrary valid `ProjectData` objects (required fields only)
    - Inject them into a test array, render `ProjectGrid`, and assert a card with the matching `title` is present in the output
    - Minimum 100 iterations
    - Tag: `// Feature: portfolio-overhaul, Property 2: Registry-driven rendering — any valid project appears in the grid`
    - **Property 2: Registry-driven rendering — any valid project appears in the grid**
    - **Validates: Requirements 2.2, 5.2**
  - [x] 3.3 Write property test for stable keys (Property 3)
    - Use `fast-check` to generate arrays of `ProjectData` objects with unique titles
    - Render `ProjectGrid` and assert no two cards share the same key and each key equals its project's `title`
    - Minimum 100 iterations
    - Tag: `// Feature: portfolio-overhaul, Property 3: Stable keys — no index-based keys in project lists`
    - **Property 3: Stable keys — no index-based keys in project lists**
    - **Validates: Requirements 4.2**
  - [x] 3.4 Refactor `Projects.js` to use the registry and `ProjectGrid`
    - Replace all inline data objects and asset imports with imports from `projectRegistry.js`
    - Replace the inline `.map()` calls with `<ProjectGrid projects={gameProjects} />` and `<ProjectGrid projects={frontEndProjects} />`
    - _Requirements: 2.4, 3.1_
  - [x] 3.5 Update `Skills.js` to import from `skillsData.js`
    - Replace hardcoded JSX skill items with a `.map()` over the imported `skillsData` array
    - Add `alt={`${label} icon`}` to each skill `<img>`
    - _Requirements: 3.2, 4.4_
  - [x] 3.6 Update `Banner.js` — module-scope constant and `useEffect` deps
    - Move `toRotate` (renamed `TO_ROTATE`) to module scope outside the component function
    - Add `text` and `delta` to the `useEffect` dependency array
    - Remove the dead `BrowserRouter as Router` import
    - _Requirements: 3.3, 4.6_
  - [x] 3.7 Verify visual parity after component split
    - Run `npm run build` and confirm it exits 0
    - Manually verify the main page renders both project tabs correctly
    - _Requirements: 3.5_

- [x] 4. Checkpoint — Ensure all tests pass after Phase 3
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Phase 4 — ProjectPage Props
  - [x] 5.1 Update `ProjectPage.js` to destructure `location.state` and pass explicit props
    - Destructure `{ name, description, tagline, images, imageUrl, btLink, projInfo }` from `useLocation().state ?? {}`
    - Pass each as an explicit named prop to `ProjectBanner`, `ProjectInfo`, and `ProjectImages`
    - _Requirements: 4.7_
  - [x] 5.2 Update `ProjectBanner`, `ProjectInfo`, and `ProjectImages` to accept named props
    - Change each component's function signature to destructure the explicit named props instead of reading from `location.state`
    - _Requirements: 4.7_
  - [x] 5.3 Write property test for explicit props round-trip (Property 4)
    - Use `fast-check` to generate arbitrary `ProjectData` objects
    - Render `ProjectBanner`, `ProjectInfo`, and `ProjectImages` with explicit props derived from the generated object
    - Assert the rendered output contains the expected `title`, `tagline`, and `projDescription` strings
    - Minimum 100 iterations
    - Tag: `// Feature: portfolio-overhaul, Property 4: Explicit props round-trip — ProjectPage children render correctly for any project`
    - **Property 4: Explicit props round-trip — ProjectPage children render correctly for any project**
    - **Validates: Requirements 4.7**
  - [x] 5.4 Verify visual parity on project detail pages
    - Run `npm run build` and confirm it exits 0
    - Navigate to a project detail page and verify all sections render correctly
    - _Requirements: 3.5, 4.7_

- [x] 6. Phase 5 — Code Quality Pass
  - [x] 6.1 Remove all `console.log` calls from `src/components/`
    - Grep `src/components/` for `console.log` and delete every occurrence (including in `ProjectCard.js`)
    - _Requirements: 4.3_
  - [x] 6.2 Add `alt` attributes to all informational `<img>` elements
    - Add `alt={`${title} thumbnail`}` to the `<img>` in `ProjectCard`
    - Add `alt` to the `<img>` in `ProjectBanner` using the project name
    - Audit all other `<img>` elements in `src/components/`; add descriptive `alt` or `alt=""` for decorative images
    - _Requirements: 4.4_
  - [x] 6.3 Write property test for image alt text (Property 5)
    - Use `fast-check` to generate arbitrary `ProjectData` objects
    - Render `ProjectCard` and `ProjectBanner` with the generated data
    - Query all `<img>` elements and assert none have an empty or missing `alt` attribute
    - Minimum 100 iterations
    - Tag: `// Feature: portfolio-overhaul, Property 5: Image alt text — all informational images have non-empty alt attributes`
    - **Property 5: Image alt text — all informational images have non-empty alt attributes**
    - **Validates: Requirements 4.4**
  - [x] 6.4 Replace index-based `key` props with stable identifiers
    - Audit all `.map()` calls in `src/components/` for `key={index}` or `key={i}` patterns
    - Replace with stable keys from data (e.g., `key={item.headerName}`, `key={label}`)
    - _Requirements: 4.2_
  - [x] 6.5 Remove dead imports and fix remaining `useEffect` dependency arrays
    - Remove any remaining unused imports across all component files
    - Run ESLint with `react-hooks/exhaustive-deps` and fix all violations
    - Confirm no class components exist under `src/`
    - _Requirements: 4.1, 4.5, 4.6_
  - [x] 6.6 Final build verification
    - Run `npm run build` — must exit 0
    - Grep `src/components/` for `console.log` — must return zero results
    - Grep `src/` for `class.*extends.*Component` — must return zero results
    - _Requirements: 1.6, 4.1, 4.3_

- [x] 7. Final Checkpoint — Ensure all tests pass
  - All 16 tests pass across 4 test suites. Build exits 0.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP pass
- Each phase ends with a `npm run build` gate — the app must stay deployable at every commit
- Property tests use `fast-check`; install it with `npm install --save-dev fast-check` before task 2.6
- All property test files should be co-located with the component or data file they test (e.g., `projectRegistry.test.js`, `ProjectGrid.test.jsx`)
- The `_template.js` file (task 2.3) is the canonical reference for new project authors
- `CitizenTracker.js` data module should set `nav: "portfolio/CitizenTracker"` to replace the old special-case branch in `ProjectCard`

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3"] },
    { "id": 3, "tasks": ["2.4"] },
    { "id": 4, "tasks": ["2.5"] },
    { "id": 5, "tasks": ["2.6", "2.7"] },
    { "id": 6, "tasks": ["3.1"] },
    { "id": 7, "tasks": ["3.2", "3.3", "3.4"] },
    { "id": 8, "tasks": ["3.5", "3.6"] },
    { "id": 9, "tasks": ["3.7"] },
    { "id": 10, "tasks": ["5.1"] },
    { "id": 11, "tasks": ["5.2"] },
    { "id": 12, "tasks": ["5.3", "5.4"] },
    { "id": 13, "tasks": ["6.1", "6.2", "6.4", "6.5"] },
    { "id": 14, "tasks": ["6.3", "6.6"] }
  ]
}
```
