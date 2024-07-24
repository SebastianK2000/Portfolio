import '../../styles/Projects.css'
import logo from '../../assets/3_logo.png'
import { useRef } from 'react'
import menu_open from '../../assets/menu.svg'
import menu_close from '../../assets/close.svg'
import { Link } from 'react-router-dom'
import underline from '../../assets/underline.svg'


const NavbarProjects = () => {

    const menuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
      if (menuRef.current) {
        menuRef.current.style.right = "0";
      }
    };

    const closeMenu = () => {
      if (menuRef.current) {
        menuRef.current.style.right = "-350px";
      }
    };

    return (

  <div className='navbar-projects'>
      <img src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt="menu icon" className="nav-mob-open-projects" />
    <ul ref={menuRef} className="nav-menu-projects">
      <img src={menu_close} onClick={closeMenu} alt="close menu" className="nav-mob-close-projects" />
      <li className="menu-projects"><Link className="my-projects-link-style" to="/"><p>Home</p></Link></li>
      <li className="menu-projects"><Link className="my-projects-link-style" to="/"><p>About Me</p></Link></li>
      <li className="menu-projects"><Link className="my-projects-link-style" to="/"><p>Portfolio</p></Link></li>
      <li className="menu-projects"><Link className="my-projects-link-style" to="/"><p>Contact</p></Link></li>
      <li className="menu-projects"><p>Projects</p><img src={underline} alt='underline' /></li>
    </ul>

    <div className="nav-connect"><a href="https://www.linkedin.com/in/sebastian-kościółek-307b081b9/" className="connect-with-me-linkedln-link">Connect With Me</a></div>
  </div>
    )
}

export default NavbarProjects
