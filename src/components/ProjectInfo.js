import { Container, Row, Col } from "react-bootstrap";
import './ProjectInfo.css';
import ReactPlayer from "react-player";
import { isMobile } from 'react-device-detect';

export const ProjectInfo = ({ projInfo }) => {
    return (
        <section className="info" id="info">
            <Container>
                {projInfo?.map((info) => (
                    <div key={info.headerName} className="info-section">
                        <h2 className="info-section-title">{info.headerName}</h2>
                        {info.listItems?.length > 0 && (
                            <ul className="info-facts">
                                {info.listItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {info.subheadings?.map((subHeading) => (
                            <div key={subHeading.headerName} className="info-sub">
                                <h3 className="info-sub-title">{subHeading.headerName}</h3>
                                <Row>
                                    <Col xs={12} lg={subHeading.videos?.length > 0 ? 5 : 12} className="info-sub-body">
                                        {subHeading.textBlurb?.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                        {subHeading.listItems?.length > 0 && (
                                            <ul>
                                                {subHeading.listItems.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </Col>
                                    {subHeading.videos?.length > 0 && (
                                        <Col xs={12} lg={7} className="info-video-col">
                                            <div className="info-video-grid">
                                                {subHeading.videos.map((video) => (
                                                    <div key={video} className="info-video-wrap">
                                                        <ReactPlayer
                                                            url={video}
                                                            muted={true}
                                                            loop={true}
                                                            playing={!isMobile}
                                                            width="100%"
                                                            height="100%"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </div>
                        ))}
                    </div>
                ))}
            </Container>
        </section>
    );
}