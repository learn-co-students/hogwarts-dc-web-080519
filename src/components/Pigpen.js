import React, { Component } from 'react';
import HogCard from './HogCard'

class Pigpen extends Component {

  makeHogCards = () => {
    return this.props.hogs.map(hog =>{
      return < HogCard {...hog}/>
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.makeHogCards()}
      </div>
    )
  }
}

export default Pigpen;
