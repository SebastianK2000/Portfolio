import '../../../styles/Mockup.css'
import Footer from '../../Footer/Footer';
import NavbarProjects from '../../Navbar/NavbarProjects';

import github from '../../../assets/github-142-svgrepo-com.svg'
import figma from '../../../assets/figma-mockup-site.svg'


const Mockup = () => {
    return (
        <div>
            <NavbarProjects />
                <h1 className="project-destination-h1">Select project destination</h1>
                <div className="social-media-container">
        
                    <a href="https://github.com/SebastianK2000/PlannerHub_Figma_Mockup" className="social-media-icon-github">
                    <img src={github} alt="GitHub" />
                    </a>

                    <a href="https://www.figma.com/design/M0S4UezDlflHdhp63OEEOA/PlannerHub?node-id=0-1&t=27FhX3noG1yTz2dB-1" className="social-media-icon-linkedin">
                    <img src={figma} alt="figma" />
                    </a>

                </div>
            <Footer />
        </div>
    )
}

export default Mockup;