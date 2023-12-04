import React, { useEffect } from 'react';
import aboutimg from '../../images/profile.png';
import resume from '../../data/Angelo_Resume1.pdf';
import { Element } from 'react-scroll';

function AboutMe() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('animatedSection');
      const image = document.getElementById('animatedImage');

      if (section && image) {
        const sectionTop = section.getBoundingClientRect().top;
        const imageTop = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('fade-in');
        }

        if (imageTop < windowHeight * 0.75) {
          image.classList.add('slide-left');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='aboutMe' className='about--section'>
      <div className='about--section--img'>
        <img id="animatedImage" src={aboutimg} alt="about me" />
      </div>
      <div className='hero--section--content-box about--section--box'>
        <Element className='hero--section--content' id='animatedSection'>
          <p className='section--title'>About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className='hero--section--description'>
            Hello there! 👋 I'm Angelo Rajesh, a passionate and results-driven full-stack developer with a keen interest in building robust and scalable web applications.
            With a strong foundation in both frontend and backend technologies,
            I bring a holistic approach to software development.
          </p>
          <p className='hero--section--description'>
          I enjoy transforming ideas into tangible solutions. 
          Whether it's crafting an intuitive user interface or optimizing database performance, 
          I thrive on challenges that push my coding skills to new heights. 
          I believe in staying updated with the latest industry trends to deliver cutting-edge solutions.
          </p>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className='btn btn-primary'>Resume</button>
          </a>
        </Element>
      </div>
    </section>
  );
}

export default AboutMe;