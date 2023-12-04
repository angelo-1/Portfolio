import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'
import logo from '../images/Angelo.png'



function NavBar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive);
    };
    const closeMenu = () => {
        setNavActive(false);
    };
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu();
            }
        };
        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        };
    }, []);

    useEffect(()=>{
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    }, []);
  return (
    <>
    <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
            {/* <img src={logo} alt="logo"/> */}
            <h2>ANGELO.</h2>
        </div>
        <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
            <span className='nav__hamburger__line'></span>
            <span className='nav__hamburger__line'></span>
            <span className='nav__hamburger__line'></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="heroSection"
                    className="navbar--content"
                    >Home</Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="aboutMe"
                    className="navbar--content"
                    >About Me</Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="mySkills"
                    className="navbar--content"
                    >My Skills</Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="myPortfolio"
                    className="navbar--content"
                    >Portfolio</Link>
                </li>
                
                {/* <li>
                    <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="heroSection"
                    className="navbar--content"
                    >Testimonials</Link>
                </li> */}
                <li>
                    <Link 
                    onClick={closeMenu}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="navbar--content"
                    >Contact Me</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar