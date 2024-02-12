import reactIcon from "../assets/img/React-icon.png";
import csharp from "../assets/img/csharp-icon.png";
import unity from "../assets/img/unity-icon.png";
import gamedesign from "../assets/img/game-design.png"
import uiux from "../assets/img/uiuxicon.png"
import word from "../assets/img/word-icon.png"
import excel from "../assets/img/excel-icon.png"
import powerpoint from "../assets/img/powerpoint-icon.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                           <div className="item">
                                <img src={reactIcon} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={unity} alt="Image" />
                                <h5>Unity Game Engine</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={reactIcon} alt="Image" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={gamedesign} alt="Image" />
                                <h5>Game Design</h5>
                            </div>
                            <div className="item">
                                <img src={uiux} alt="Image" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={word} alt="Image" />
                                <h5>Word Certified</h5>
                            </div>
                            <div className="item">
                                <img src={excel} alt="Image" />
                                <h5>Excel Certified</h5>
                            </div>
                            <div className="item">
                                <img src={powerpoint} alt="Image" />
                                <h5>PowerPoint Certified</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
