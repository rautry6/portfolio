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

// Project imports
import CorporationInc from './projects/CorporationInc'
import IdleDino from './projects/IdleDino'
import CoinKnight from './projects/CoinKnight'
import Chiba from './projects/Chiba'
import ConcreteFormwork from './projects/ConcreteFormwork'
import IllusionOfWeight from './projects/IllusionOfWeight'
import GetMeOut from './projects/GetMeOut'
import JelloFellos from './projects/JelloFellos'
import MagLabs from './projects/MagLabs'
import CitizenTracker from './projects/CitizenTracker'
import EmployeePolls from './projects/EmployeePolls'
import MyReads from './projects/MyReads'

export const gameProjects = [
    Chiba,
    CorporationInc,
    CoinKnight,
    MagLabs,
    IdleDino,
    ConcreteFormwork,
    IllusionOfWeight,
    GetMeOut,
    JelloFellos,
]

export const frontEndProjects = [
    // CitizenTracker,
    EmployeePolls,
    MyReads,
]
