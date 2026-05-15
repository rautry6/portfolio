import './Skills.css'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = ({ skills }) => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <div className="skill-grid">
                                {skills.map(({ icon, label }) => (
                                    <div key={label} className="skill-item">
                                        <img src={icon} alt={`${label} icon`} />
                                        <h5>{label}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}
