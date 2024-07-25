import '../../../styles/Frontend.css'
import Footer from '../../Footer/Footer';
import NavbarProjects from '../../Navbar/NavbarProjects';

import github from '../../../assets/github-142-svgrepo-com.svg'
import manuskrypt from '../../../assets/manuskrypt.svg'
import bubleform from '../../../assets/loginForm.svg'
import bookposse from '../../../assets/bookposse.svg'
import interactiveCard from '../../../assets/interactiveCard.svg'

const Frontend = () => {
    return (
        <div>
            <NavbarProjects />
                <div id='work' className="mywork-projects">
                    <div className="mywork-container-projects">
                        <a href="https://manuskrypt.netlify.app"><img src={ manuskrypt } alt="library Manuskrypt" /></a>
                        <a href="https://bubble-form-html-css.netlify.app/?"><img src={ bubleform } alt="bubble form" /></a>
                        <a href="https://book-posse.netlify.app"><img src={ bookposse } alt="library page" /></a>
                        <a href="https://interactive-card-listener-in-js.netlify.app/index.html"><img src={ interactiveCard } alt="interactive card" /></a>
                    </div>
                    <h1 className="more-projects">More projects in my GitHub!</h1>
                    <a href="https://github.com/SebastianK2000" className="social-media-icon-github">
                    <img src={github} alt="GitHub" />
                    </a>
                </div>
            <Footer />
        </div>
    )
}

export default Frontend;