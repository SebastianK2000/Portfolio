import Footer from '../../Footer/Footer';
import NavbarProjects from '../../Navbar/NavbarProjects';
import github from '../../../assets/github-142-svgrepo-com.svg'

import tictactoe from '../../../assets/tictactoe.svg'
import tetris from '../../../assets/tetris.svg'
import memory from '../../../assets/memory.svg'
import tennis from '../../../assets/tennis.svg'


const Game = () => {
    return (
        <div>
            <NavbarProjects />
                <div id='work' className="mywork-projects">
                    <div className="mywork-container-projects">
                        <a href="https://tic-tac-toe-game-in-js.netlify.app"><img src={ tictactoe } alt="tictactoe" /></a>
                        <a href="https://game-tetris-in-js.netlify.app"><img src={ tetris } alt="tetris" /></a>
                        <a href="https://game-memory-in-js.netlify.app"><img src={ memory } alt="memory" /></a>
                        <a href="https://game-tennis-in-js.netlify.app"><img src={ tennis } alt="tennis" /></a>
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

export default Game;