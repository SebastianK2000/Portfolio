import '../../../styles/Backend.css'
import Footer from '../../Footer/Footer';
import NavbarProjects from '../../Navbar/NavbarProjects';
import github from '../../../assets/github-142-svgrepo-com.svg'

import hr from '../../../assets/hr.svg'
import library from '../../../assets/library.svg'
import crud from '../../../assets/crud.svg'
import progress from '../../../assets/progress.svg'
import Music from '../../MusicButton/Music';


const Backend = () => {
    return (
        <div>
            <Music />
            <NavbarProjects />
            <div id='work' className="mywork-projects">
                    <div className="mywork-container-projects">
                        <a href="https://github.com/SebastianK2000/HR_managment" target="_blank"><img src={ hr } alt="hr_system_java" /></a>
                        <a href="https://github.com/SebastianK2000/Biblioteka" target="_blank"><img src={ library } alt="library_system_java" /></a>
                        <a href="https://github.com/SebastianK2000/crud-php" target="_blank"><img src={ crud } alt="crud_php" /></a>
                        <a><img src={ progress } alt="in_progress_php" /></a>
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

export default Backend;