import { Container, Row, Col } from 'react-bootstrap'
import './Contact.css'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { handleEmailClicked } from '../functions/email'

export const Contact = () => {
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility once offset={400}>
                            {({ isVisible }) => (
                                <img
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__zoomIn'
                                            : 'scroll-hidden'
                                    }
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility once offset={400}>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : 'scroll-hidden'
                                    }
                                >
                                    <h2>Get In Touch</h2>
                                    <h3>Reach out to me via email</h3>
                                    <button className={'email-button'} onClick={handleEmailClicked}>
                                        reidautry02@gmail.com
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
