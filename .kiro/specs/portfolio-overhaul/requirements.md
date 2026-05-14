# Requirements Document

## Introduction

This document covers the overhaul of a personal portfolio website built with React. The goals are to modernize the dependency stack, break up monolithic components into focused, reusable pieces, establish a clear and scalable pattern for adding new projects, and align the codebase with current React best practices throughout.

The portfolio currently has a working structure — a main page with NavBar, Banner, Skills, Projects, and Contact sections, plus individual project detail pages — but the `Projects.js` component is a single large file containing all project data inline, all import statements, and all rendering logic. This overhaul addresses that and the surrounding code quality issues.

## Glossary

- **Portfolio_App**: The React application as a whole.
- **Projects_Component**: The `Projects` React component responsible for rendering the project grid and tabs.
- **Project_Data_Module**: A dedicated JavaScript/TypeScript module (one per project) that exports a single project's data object.
- **Project_Registry**: A central index file that imports and re-exports all Project_Data_Modules as a typed array.
- **ProjectCard**: The existing card component that renders a single project thumbnail and title.
- **ProjectPage**: The existing detail page component that renders full project information.
- **Asset_Index**: An `index.js` file inside an asset folder that re-exports all assets for that project.
- **Dependency**: An npm package listed in `package.json`.
- **Dead_Dependency**: A Dependency that is imported nowhere in the source code.
- **Outdated_Dependency**: A Dependency whose installed major version is behind the current stable major version.

---

## Requirements

### Requirement 1: Dependency Audit and Update

**User Story:** As a developer, I want all dependencies to be current and free of unused packages, so that the project builds on modern tooling and has a minimal, maintainable dependency surface.

#### Acceptance Criteria

1. THE Portfolio_App SHALL have all Dead_Dependencies removed from `package.json` — a Dead_Dependency is any package that has zero import or require references anywhere under `src/`.
2. WHEN a Dependency has a newer stable major version available AND the update does not introduce a breaking change that cannot be resolved within this overhaul, THE Portfolio_App SHALL be updated to that version.
3. IF a Dependency update introduces a breaking change that cannot be resolved within this overhaul, THEN THE Portfolio_App SHALL retain the current version AND add an inline `// TODO:` comment on that dependency's line in `package.json` stating the reason it was not updated.
4. THE Portfolio_App SHALL use React 18 or later as its React version after the update.
5. THE Portfolio_App SHALL use `react-router-dom` v6 or later for all client-side routing after the update; any v5 API usage (`Switch`, `useHistory`, `Redirect`) SHALL be replaced with the v6 equivalents (`Routes`, `useNavigate`, `Navigate`).
6. WHEN the build script (`npm run build`) is executed after all dependency updates are applied, THE Portfolio_App SHALL complete without compilation errors and produce output files in the `build/` directory.

---

### Requirement 2: Project Data Modularization

**User Story:** As a developer, I want each project's data to live in its own dedicated module, so that I can add, edit, or remove a project by touching exactly one file without modifying any shared component.

#### Acceptance Criteria

1. THE Project_Registry SHALL export a structured object with named arrays per category (e.g., `gameProjects` and `frontEndProjects`) that the Projects_Component consumes, preserving the existing two-tab UI structure.
2. THE Project_Registry SHALL be the single source of truth for all project data; no project data objects SHALL be defined inline inside any component file.
3. EACH Project_Data_Module SHALL export a single default object that conforms to a shared `ProjectData` PropTypes shape (or TypeScript interface) with the following fields:
   - **Required**: `title` (string), `projTagline` (string), `projDescription` (string), `imgUrl` (image asset)
   - **Optional**: `imageList` (array of `{ image, imageTitle }`), `buttonLink` (string URL), `projectInfo` (array of section objects), `nav` (string route override for non-standard navigation targets)
4. THE Projects_Component SHALL import all project data exclusively from the Project_Registry; no inline project data objects SHALL exist in `Projects.js`, `ProjectCard.js`, or any component that renders project cards.
5. WHEN the Project_Registry module is imported in a TypeScript-aware environment, THE compiler SHALL report a type error if a Project_Data_Module is missing any required field, catching omissions at build time rather than at runtime.

---

### Requirement 3: Component Modularization

**User Story:** As a developer, I want each component to have a single, clear responsibility, so that the codebase is easy to navigate, test, and extend.

#### Acceptance Criteria

1. THE Projects_Component SHALL be split into three separate files: a data file (containing the Project_Registry or re-exporting it), a `ProjectGrid` component file (responsible only for rendering the card grid for a given array of projects), and a `Projects` component file (responsible only for tab/category state and composing the tabs with `ProjectGrid`).
2. THE Skills_Component SHALL import its skills data (icon and label pairs) from a separate file (e.g., `skillsData.js`) that exports a named array constant; no skill icon or label SHALL be hardcoded as JSX directly inside `Skills.js`.
3. THE Banner_Component SHALL define the `toRotate` array as a named constant at module scope (outside the component function body) so it is not re-created on every render.
4. WHEN any component file under `src/components/` is opened, THE file SHALL contain no more than one primary exported component; file-local helper sub-components that are not exported and are used only within that file are permitted.
5. THE Portfolio_App SHALL preserve all three existing routes (`portfolio/`, `portfolio/project/`, `portfolio/CitizenTracker`) and their rendered output after modularization is complete.

---

### Requirement 4: React Best Practices

**User Story:** As a developer, I want the codebase to follow current React best practices, so that the code is predictable, performant, and easy to reason about.

#### Acceptance Criteria

1. THE Portfolio_App SHALL use functional components exclusively; no class components SHALL exist anywhere under `src/` after the overhaul.
2. WHEN a component renders a dynamic or reorderable list of items using `.map()`, THE component SHALL provide a `key` prop derived from a stable, unique identifier from the data (e.g., `project.title`) rather than the array index.
3. THE Portfolio_App SHALL contain no `console.log` calls in any component source file under `src/components/` — this prohibition covers render paths, event handlers, and effects; test files are excluded.
4. WHEN an `<img>` element renders content that conveys information to the user, THE element SHALL include a non-empty `alt` attribute describing the image; purely decorative images that add no informational value SHALL use `alt=""`.
5. THE Portfolio_App SHALL use named exports for all components under `src/components/`; the application entry point (`App.js` / `index.js`) is exempt from this rule.
6. WHEN `useEffect` is used in any component, THE hook SHALL include a dependency array, and all variables referenced inside the effect that are defined outside it SHALL be listed in that array, conforming to the `exhaustive-deps` ESLint rule.
7. THE ProjectPage component and all child components it renders SHALL accept explicitly named props (e.g., `name`, `description`, `tagline`, `images`, `imageUrl`, `btLink`, `projInfo`) rather than receiving a single opaque location-state object; each prop SHALL be destructured at the function signature level.

---

### Requirement 5: Project Addition Workflow

**User Story:** As a developer, I want a clear, documented pattern for adding a new project, so that future additions are fast and consistent.

#### Acceptance Criteria

1. THE Project_Registry file SHALL include an inline comment block at the top that lists the exact steps required to add a new project, including: (a) create a new file in the projects data directory, (b) fill in required and optional fields using the template, (c) import the new module in the registry, and (d) add it to the correct category array (`gameProjects` or `frontEndProjects`).
2. WHEN a developer creates a new Project_Data_Module following the documented steps and the documented field template, THE new project SHALL appear in the correct tab of the portfolio grid without any modifications to `Projects.js`, `ProjectCard.js`, or `ProjectPage.js`.
3. THE project data directory SHALL contain a `_template.js` file that exports a commented-out example object showing every required field with a placeholder value and every optional field with a description of its purpose and expected shape.
