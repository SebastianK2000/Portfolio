import '../../../styles/Backend.css'
import Footer from '../../Footer/Footer';
import NavbarProjects from '../../Navbar/NavbarProjects';
import github from '../../../assets/github-142-svgrepo-com.svg'

import hr from '../../../assets/hr.svg'
import library from '../../../assets/library.svg'
import crud from '../../../assets/crud.svg'
import progress from '../../../assets/progress.svg'


const Backend = () => {
    return (
        <div>
            <NavbarProjects />
            <div id='work' className="mywork-projects">
                    <div className="mywork-container-projects">
                        <a href="https://github.com/SebastianK2000/HR_managment"><img src={ hr } alt="hr_system_java" /></a>
                        <a href="https://github.com/SebastianK2000/Biblioteka"><img src={ library } alt="library_system_java" /></a>
                        <a href="https://github.com/SebastianK2000/crud-php"><img src={ crud } alt="crud_php" /></a>
                        <a><img src={ progress } alt="in_progress_php" /></a>
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

export default Backend;