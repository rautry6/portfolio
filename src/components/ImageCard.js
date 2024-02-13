import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ImageCard = ({ image, imageTitle }) => {
  return (

    <Col size={12} sm={6} md={4}>

      <div className="proj-imgbx">
        <img src={image} />
        <div className="proj-txtx">
        <span style= {{color : "white"}}>{imageTitle}</span>
        </div>
      </div>

    </Col>

  )
}
