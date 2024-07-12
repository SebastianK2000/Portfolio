import '../../styles/About.css'
import theme_pattern from '../../assets/theme.svg'
import profile_img2 from '../../assets/profile2.jpg'

const About = () => { 
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className="profile2" src={profile_img2} alt="Profile photo" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Not sure how much sophistication the dashes next to the technologies mean? Me too but they look insane!</p>
                        <p>And seriously, in each technology I have completed several projects. In the case of Figma, it is one very large project. Anyway, take a look at the tab with my works.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Figma</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">

                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />

                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJETS COMPLETED</p>
                </div>
                <hr />

                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>MAIN TECHNOLOGY</p>
                </div>

            </div>
        </div>
    )
}

export default About;