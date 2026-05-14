import { Container, Row, Col } from 'react-bootstrap'
import './Banner.css'

export const ProjectBanner = ({ name, description, tagline, imageUrl, btLink }) => {
    return (
        <section className="banner" id="description">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">{tagline}</span>
                        <h1>{name}</h1>

                        {btLink ? (
                            <div>
                                <Row xs={12} md={6} xl={7}>
                                    <p>{description}</p>
                                    <a href={btLink} target="_blank" rel="noreferrer">
                                        <button
                                            style={{ textDecoration: 'underline' }}
                                            title={btLink}
                                        >
                                            Available here!
                                        </button>
                                    </a>
                                </Row>
                            </div>
                        ) : (
                            <p>{description}</p>
                        )}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={imageUrl} alt={`${name} banner`} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
