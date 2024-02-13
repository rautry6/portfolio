import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { ProjectNavbar } from "./ProjectNavbar";
import { ProjectBanner } from "./ProjectBanner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useLocation } from 'react-router-dom';

export const ProjectPage = () => {
    const location = useLocation()
    console.log(location.state)

  return (
    <div className="App">
      <ProjectNavbar />
      <ProjectBanner project={location.state}/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

