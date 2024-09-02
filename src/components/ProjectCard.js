import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, projDescription, projectInfo, projTagline, imgUrl, imageList, buttonLink }) => {
  return (

    <Col size={12} sm={6} md={4}>
          <NavLink to="project" state={{
      name: title,
      description: projDescription, 
      projInfo: projectInfo,
      tagline: projTagline,
      images:imageList,
      imageUrl: imgUrl,
      btLink: buttonLink, 
    }}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 style= {{color : "white"}}>{title}</h4>
          <span style= {{color : "white"}}>{projTagline}</span>
        </div>
      </div>
      </NavLink>
    </Col>

  )
}
