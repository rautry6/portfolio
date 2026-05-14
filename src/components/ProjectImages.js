import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ImageCard } from "./ImageCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const ProjectImages = ({ images }) => {
  return (
    <section className="project" id="images">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Project Images</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Gameplay</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {images?.map((img) => (
                      <ImageCard key={img.imageTitle} {...img} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
