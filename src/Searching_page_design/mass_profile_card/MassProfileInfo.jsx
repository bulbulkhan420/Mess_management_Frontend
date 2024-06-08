import React from 'react'
import MassProfileCard from './MassProfileCard'
const MassProfileInfo = () => {
  return (
    <div>
      <div className="App">
      <h1>Card Component Example</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MassProfileCard 
          title="Beautiful Landscape" 
          description="A beautiful landscape with mountains and lakes."
          imageUrl="https://example.com/your-image.jpg"
        />
      </div>
    </div>
    </div>
  )
}

export default MassProfileInfo
