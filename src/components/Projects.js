import { Container, Row, Col } from 'react-bootstrap'
import './Projects.css'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { ProjectGrid } from './ProjectGrid'

export const Projects = ({ projects }) => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility once partialVisibility offset={600}>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : 'scroll-hidden'
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>Click on each icon for more details</p>
                                    <ProjectGrid projects={projects} />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}
