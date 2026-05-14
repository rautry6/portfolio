import { skillsData } from '../data/skillsData';
import './Skills.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktopLarge: {
      breakpoint: { max: 2000, min: 1400 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{padding: "2vh"}}>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} pauseOnHover={true} className="owl-carousel owl-theme skill-slider">
                            {skillsData.map(({ icon, label }) => (
                              <div key={label} className="item">
                                <img src={icon} alt={`${label} icon`} />
                                <h5>{label}</h5>
                              </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
