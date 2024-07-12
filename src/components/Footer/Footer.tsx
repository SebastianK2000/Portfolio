import '../../styles/Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className="footer-logo" src={footer_logo} alt="logo" />
                    <p>I'm frontend developer based in Poland (Cracow).</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img className='user_icon' src={user_icon} alt="user icon" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <button className="footer-subscribe">Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2023 Sebastian Kosciolek. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;