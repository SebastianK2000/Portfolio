import '../../styles/Social.css'
import gmail from '../../assets/gmail.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Social = () => {
    return (
            <div className="social-media-container">
            
                <a href="mailto:sebastian.kosciolek2000@gmail.com"className="social-media-icon-gmail">
                    <img src={gmail} alt="Gmail" />
                </a>
            
                <a href="https://github.com/SebastianK2000" target="_blank" className="social-media-icon-github">
                    <img src={github} alt="GitHub" />
                </a>

                <a href="https://www.linkedin.com/in/sebastian-kościółek-307b081b9/" target="_blank" className="social-media-icon-linkedin">
                    <img src={linkedin} alt="Linkedln" />
                </a>

            </div>
    )
}

export default Social;