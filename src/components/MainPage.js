import './MainPage.css'
import { NavBar } from './Navbar/NavBar'
import { Banner } from './Banner'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'

export const MainPage = () => {
    return (
        <div className="main-page">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
