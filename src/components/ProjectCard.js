import { Col } from "react-bootstrap";
import './ProjectCard.css';
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, projDescription, projectInfo, projTagline, imgUrl, imageList, buttonLink, nav }) => {
  const destination = nav ?? "project";
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3}>
      <NavLink to={destination} state={{
        name: title,
        description: projDescription,
        projInfo: projectInfo,
        tagline: projTagline,
        images: imageList,
        imageUrl: imgUrl,
        btLink: buttonLink,
      }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} thumbnail`} />
          <div className="proj-txtx">
            <h4 style={{ color: "white" }}>{title}</h4>
            <span style={{ color: "white" }}>{projTagline}</span>
          </div>
        </div>
      </NavLink>
    </Col>
  );
}
