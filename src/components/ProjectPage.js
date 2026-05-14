import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectNavbar } from "./ProjectNavbar";
import { ProjectBanner } from "./ProjectBanner";
import { ProjectImages } from './ProjectImages';
import { ProjectInfo } from './ProjectInfo';
import { Footer } from "./Footer";
import { useLocation } from 'react-router-dom';

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
}

