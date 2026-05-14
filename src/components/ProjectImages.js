import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './Projects.css';
import { ImageCard } from "./ImageCard";

export const ProjectImages = ({ images }) => {
  return (
    <section className="project" id="images" style={{ overflow: 'hidden' }}>
      <Container>
        <Row>
          <Col size={12}>
            <h2>Project Images</h2>
            <Tab.Container id="project-images-tabs" defaultActiveKey="first">
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
    </section>
  );
}
