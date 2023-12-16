import React from 'react'
import heroimg from '../images/hero.png'
import { FaWhatsapp,FaInstagram,FaGithub,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-scroll'
function HeroSection() {
  return (
    <>
    <section id="heroSection" className='hero--section'>
        <div className='hero--section-content-box'>
            <div className='hero--section--content'>
                <p className='section--title'>Hey, I'm Angelo Rajesh</p>
                <h1 className='hero--section--title'>
                    <span className='hero--section--title--color'>Full Stack </span>{" "}
                    <br />
                    Developer
                </h1>
                <p className='hero--section--description'>Specialised in frontend and backend development for complex scalable web apps.
                I like to craft solid and responsive products with great user experiences.</p>
                
            </div>
            <div className='social--media'>
            <ul>
                <li className='social--media--linkedin'>
                    <a href='https://www.linkedin.com/in/angelo-rajesh'>
                    <FaLinkedinIn className='social-items'/>
                    </a></li >
                <li className='social--media--github'>
                    <a href='https://github.com/angelo-1'>
                        <FaGithub className='social-items'/>
                    </a></li>
                <li className='social--media--instagram'>
                    <a href="https://instagram.com/angelo.rajesh"><FaInstagram className='social-items'/></a>
                    </li>
                <li className='social--media--whatsapp'><a href="https://wa.me/9539336435">
                <FaWhatsapp className='social-items'/>
                </a>
                </li>
            </ul>
        </div>
        <Link 
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="text-md">
        <button className='btn btn-primary'>Get In Touch</button>
        </Link>
        </div>
        <div className='hero--section--img'>
            <img src={heroimg} alt="hero-section" />
        </div>
        
    </section>
    </>
  )
}

export default HeroSection