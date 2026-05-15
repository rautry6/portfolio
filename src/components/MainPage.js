import { useState } from 'react'
import './MainPage.css'
import { NavBar } from './Navbar/NavBar'
import { Banner } from './Banner'
import { CategorySwitch } from './CategorySwitch'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { gameDevSkills, frontEndSkills } from '../data/skillsData'
import { gameProjects, frontEndProjects } from '../data/projectRegistry'

export const MainPage = () => {
    const [category, setCategory] = useState('game')

    const skills = category === 'game' ? gameDevSkills : frontEndSkills
    const projects = category === 'game' ? gameProjects : frontEndProjects

    return (
        <div className="main-page">
            <NavBar />
            <Banner />
            <CategorySwitch category={category} onSwitch={setCategory} />
            <Skills skills={skills} />
            <Projects key={`projects-${category}`} projects={projects} />
            <Contact />
            <Footer />
        </div>
    )
}
