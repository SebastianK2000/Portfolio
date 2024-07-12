import logo from '../../assets/3_logo.png'
import '../../styles/Navbar.css'
import { useRef, useState } from 'react'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu.svg'
import menu_close from '../../assets/close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right =  "0";
        }
    }
    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "-350px";
        }
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <img src={menu_open} onClick={openMenu} alt="menu icon" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li className="menu"><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='underline' /> : <></>}</li>
                <li className="menu"><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about me")}>About Me</p></AnchorLink>{menu === "about me" ? <img src={underline} alt='underline' /> : <></>}</li>
                <li className="menu"><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline} alt='underline' /> : <></>}</li>
                <li className="menu"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='underline' /> : <></>}</li>
                <li className="menu"><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='underline' /> : <></>}</li>
            </ul>

            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

        </div>
    )

}

export default Navbar;