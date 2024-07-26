import '../../styles/Projects.css'
import theme_pattern from '../../assets/theme.svg'

import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import NavbarProjects from '../Navbar/NavbarProjects.js';

import frontend from '../../assets/frontend.svg'
import backend from '../../assets/backend.svg'
import game from '../../assets/game.svg'
import mockup from '../../assets/mockup.svg'
import Music from '../MusicButton/Music.js';

const Projects = () => {

  return (
    <section>
      <Music />
      <NavbarProjects />
      <div id='work' className="mywork-projects">
        <div className="mywork-title-projects">
          <h1>My Projects</h1>
          <img className="my-project-img-theme" src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="mywork-container-projects">
              <Link to="/frontend"><img src={ frontend } alt="Fontend" /></Link>
              <Link to="/backend"><img src={ backend } alt="Backend" /></Link>
              <Link to="/game"><img src={ game } alt="Game" /></Link>
              <Link to="/mockup"><img src={ mockup } alt="Mockup" /></Link>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Projects;
