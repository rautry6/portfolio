import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { isMobile } from 'react-device-detect';

export const ProjectInfo = ({ projInfo }) => {
    return (
        <section className="info" id="info">
            <Container style={{paddingTop : "-20px"}}>
                {projInfo?.map((info) => (
                    <div key={info.headerName}>
                        <h1>{info.headerName}</h1>
                        <ul>
                            {info.listItems?.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        {info.subheadings?.map((subHeading) => (
                            <div key={subHeading.headerName}>
                                <h2>{subHeading.headerName}</h2>
                                <Row>
                                    <Col xs={12} lg={6}>
                                        {subHeading.textBlurb?.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                        {subHeading.listItems?.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        {subHeading.videos?.map((video) => (
                                            <div key={video}>
                                                <p></p>
                                                <ReactPlayer url={video} muted={true} loop={true} playing={!isMobile} width={'100%'} height={'100%'}/>
                                                <p style={{marginBottom: "50px"}}></p>
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                ))}
            </Container>
        </section>
    );
}