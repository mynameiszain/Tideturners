import React from 'react'

const TeamMember = ({ image, name, role, experience, funfact }) => {
  return (
    <div className="card mx-auto font-Verdana">
        <img src={image} alt={name} className='card-img' />
        <div className="card-body">
            <h1 className='card-title'>{name}</h1>
            <p className='card-sub-title'>{role}</p>
            <p className='card-info'>{experience.substring(0, 80)}...</p>
            <button className='card-btn'>Read More</button>
        </div>
    </div>
  )
}

export default TeamMember


