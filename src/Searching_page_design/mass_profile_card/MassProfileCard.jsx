import React from 'react'
import './MassProfileCard.css'

const MassProfileCard = ({ title, description, imageUrl }) => {
  return (
    <div>
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    </div>
  )
}

export default MassProfileCard
