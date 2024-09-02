import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export const ProjectInfo = (project) => {
    //console.log(project.project)
    return (
        <section className="info" id="info">
            <Container style={{paddingTop : "-20px"}}>
                {project.project?.projInfo?.map((info, index) => (
                        <div>
                            <h1>{`${info.headerName}`} </h1>
                            <ul key={index}>
                                {info.listItems?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            {info.subheadings?.map((subHeading, index) => (
                                //log the subheading
                                //console.log(subHeading),
                                <div key={index}>
                                    <h2>{subHeading.headerName}</h2>
                                    <Row>
                                        <Col xs lg={6}>
                                            {subHeading.textBlurb?.map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))}
                                            {subHeading.listItems?.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                            }
                                        </Col>
                                        <Col xs={6} lg>
                                            {subHeading.videos?.map((video, index) => (
                                                <div>
                                                <p></p>
                                                <ReactPlayer url={video} muted={true} loop={true} playing={true} width={'100%'}/>
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
    )
}