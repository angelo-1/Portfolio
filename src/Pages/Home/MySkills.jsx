import React from 'react'
import { skills } from '../../data/data'
import { useEffect } from 'react'
import { Element } from 'react-scroll';

function MySkills() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('animatedSkillsSection');
      

      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <section className='skills--section' id='mySkills'>
    <div className='portfolio--container'>
            <p className='section--title'>My Skills</p>
            <h2 className='skills--section--heading'>My Expertise</h2>
       </div>
        <Element className="skills--section--container" id="animatedSkillsSection">
          {skills.map(({ id, src, title}) => (
            <div
              key={id}
              className="skills--section--items"
            >
              <img src={src} alt=""/>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </Element>
      </section>
    </>
  )
}

export default MySkills