/**
 * _template.js — Project Data Module Template
 *
 * HOW TO USE THIS FILE
 * ====================
 * 1. Copy this file and rename it to match your project (e.g., MyProject.js).
 * 2. Uncomment the object below and fill in every required field.
 * 3. Add any optional fields you need; delete the ones you don't.
 * 4. Import your image assets at the top of the new file (see the existing
 *    project modules in this directory for examples).
 * 5. Follow the steps in src/data/projectRegistry.js to register the project.
 *
 * The JSDoc @type annotation below gives you TypeScript-style autocomplete and
 * type-checking in editors that support JSDoc (VS Code, WebStorm, etc.).
 */

// Example asset imports — replace with your own:
// import myThumbnail from "../../assets/img/Projects/MyProject/thumbnail.png";
// import { Screenshot1, Screenshot2 } from "../../assets/img/Projects/MyProject";

/*

/** @type {import('../projectDataShape').ProjectDataShape} * /
const _Template = {

  // ─── REQUIRED FIELDS ────────────────────────────────────────────────────────

  // The project's display name. Used as the card heading, the page title,
  // and as the stable React key — must be unique across all projects.
  title: "My Project Title",

  // A short one-line descriptor shown beneath the title on the project card
  // (e.g., "Unity 2D Platformer", "React Web App").
  projTagline: "Short one-line descriptor",

  // A multi-sentence description of the project shown on the detail page.
  // Describe what the project is, your role, and any notable achievements.
  projDescription: "A paragraph describing the project, your role, and any notable achievements.",

  // The thumbnail image displayed on the project card.
  // Must be an imported asset (not a raw URL string).
  imgUrl: myThumbnail,

  // ─── OPTIONAL FIELDS ────────────────────────────────────────────────────────

  // An array of images shown in the image gallery on the project detail page.
  // Each entry is an object with:
  //   image      — imported asset (required)
  //   imageTitle — caption string displayed below the image (required)
  imageList: [
    { image: Screenshot1, imageTitle: "Caption for screenshot 1" },
    { image: Screenshot2, imageTitle: "Caption for screenshot 2" },
  ],

  // A URL string for the primary call-to-action button on the detail page
  // (e.g., a Steam page, itch.io link, GitHub repo, or live demo URL).
  // Omit this field entirely if there is no external link for the project.
  buttonLink: "https://example.com/my-project",

  // An array of information sections rendered on the project detail page.
  // Each section has:
  //   headerName  — section heading string (required)
  //   listItems   — flat array of bullet-point strings (optional)
  //   subheadings — array of sub-section objects (optional, see shape below)
  //
  // Sub-section shape:
  //   headerName — sub-section heading string (required)
  //   textBlurb  — array of paragraph strings (optional)
  //   listItems  — array of bullet-point strings (optional)
  //   videos     — array of imported video assets (optional)
  projectInfo: [
    {
      headerName: "Responsibilities",
      listItems: [
        "Role: Lead Developer",
        "Team Size: 1",
        "Timeline: 3 Months",
      ],
      subheadings: [
        {
          headerName: "Core Features",
          textBlurb: [
            "A paragraph describing this sub-section in more detail.",
          ],
          listItems: [
            "Feature or responsibility bullet point",
            "Another bullet point",
          ],
          // videos: [MyVideo1, MyVideo2],  // imported video assets
        },
      ],
    },
  ],

  // A route string that overrides the default "/project" navigation target
  // when the project card is clicked. Only needed for projects that have their
  // own dedicated route (e.g., "portfolio/CitizenTracker").
  // Omit this field for standard project detail pages.
  nav: "portfolio/my-custom-route",

};

export default _Template;

*/
