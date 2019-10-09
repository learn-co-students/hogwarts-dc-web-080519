import React from 'react'
import HogCards from './HogCards'

const HogsContainer = props => {

  return (
    <div className="ui grid container">
      <HogCards hogs={props.hogs} onSelectedHog={props.onSelectedHog}/>
    </div>
  )

}

export default HogsContainer
