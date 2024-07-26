import '../../../styles/Frontend.css'
import Footer from '../../Footer/Footer';
import NavbarProjects from '../../Navbar/NavbarProjects';

import github from '../../../assets/github-142-svgrepo-com.svg'
import manuskrypt from '../../../assets/manuskrypt.svg'
import bubleform from '../../../assets/loginForm.svg'
import bookposse from '../../../assets/bookposse.svg'
import interactiveCard from '../../../assets/interactiveCard.svg'
import Music from '../../MusicButton/Music';

const Frontend = () => {
    return (
        <div>
            <Music />
            <NavbarProjects />
                <div id='work' className="mywork-projects">
                    <div className="mywork-container-projects">
                        <a href="https://manuskrypt.netlify.app" target="_blank"><img src={ manuskrypt } alt="library Manuskrypt" /></a>
                        <a href="https://bubble-form-html-css.netlify.app/?" target="_blank"><img src={ bubleform } alt="bubble form" /></a>
                        <a href="https://book-posse.netlify.app" target="_blank"><img src={ bookposse } alt="library page" /></a>
                        <a href="https://interactive-card-listener-in-js.netlify.app/index.html" target="_blank"><img src={ interactiveCard } alt="interactive card" /></a>
                    </div>
                    <h1 className="more-projects">More projects in my GitHub!</h1>
                    <a href="https://github.com/SebastianK2000" className="social-media-icon-github">
                    <img className="more-project-icon-github" src={github} alt="GitHub" />
                    </a>
                </div>
            <Footer />
        </div>
    )
}

export default Frontend;