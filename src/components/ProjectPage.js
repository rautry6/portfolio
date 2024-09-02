import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { ProjectNavbar } from "./ProjectNavbar";
import { ProjectBanner } from "./ProjectBanner";
import { ProjectImages } from './ProjectImages';
import { ProjectInfo } from './ProjectInfo';
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useLocation } from 'react-router-dom';

export const ProjectPage = () => {
    const location = useLocation()
    //console.log(location.state)

  return (
    <div className="App">
      <ProjectNavbar project={location.state}/>
      <ProjectBanner project={location.state}/>
      <ProjectInfo project={location.state} />
      <ProjectImages project={location.state} />
      <Footer />
    </div>
  );
}

