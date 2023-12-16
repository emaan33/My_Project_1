import React from 'react'
import World from '../images/World.png'
const Map = () => {
  return (
    <div>
        <div className='whole'>
      <div className="heading">
        <p className='Map-H1'>YOU”LL GET</p>
        <p className='Map-H2'>Followers all around the Glob</p>
      </div>
      <div className='world'>
        <img className='world-img' src={World} alt="map" />
      </div>
      </div>
    </div>
  )
}

export default Map
