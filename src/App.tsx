import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Social from './components/SocialMedia/Social'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Technology from './components/OtherTechnology/Technology'
import Music from './components/MusicButton/Music'

const App = () => {
    return (
        <div>
            <Music />
            <Navbar />
            <Profile />
            <Social />
            <About />
            <Technology />
            <MyWork />
            <Contact />
            <Footer />
        </div>
    )

}

export default App;