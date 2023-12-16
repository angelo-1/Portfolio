import React from 'react'
import { NavLink } from 'react-router-dom';

function PortfolioCard(props) {
    const {title, description, link, src} =props.data;
  return (
    <>
            <div className='portfolio--section--card'>
                <img src={src} alt="images" className='portfolio--section--img'/>
                <h2 className='portfolio--section--title'>{title}</h2>
                <div className='portfolio--section--card--content'>
                    <p className='text-md'>{description}</p>
                    <div className='portfolio--btns'>
                        <NavLink to="/" className="btn btn-outline-primary">View</NavLink>
                        <NavLink to={link} className="btn btn-primary">Source</NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PortfolioCard