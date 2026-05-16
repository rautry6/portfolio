import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import './Projects.css'
import { ImageCard } from './ImageCard'

export const ProjectImages = ({ images }) => {
    if (images?.length == 0) return <view></view>

    return (
        <section className="project" id="images" style={{ overflow: 'hidden' }}>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 style={{ padding: '2vw' }}>Images</h2>
                        <Tab.Container id="project-images-tabs" defaultActiveKey="first">
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
    )
}
