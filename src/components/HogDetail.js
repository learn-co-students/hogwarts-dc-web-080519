import React from 'react'

const HogDetail = props => {

  function returnImgName(hogname){
    return(hogname.toLowerCase().split(" ").join('_'))
  }

  return (
    <div className="minPigTile">
      <img src={require('../hog-imgs/' + returnImgName(props.hog.name) +'.jpg')} alt = {props.hog.name}/>
      <h2>{props.hog.name}</h2>
      <p>{`Specialty: ${props.hog.specialty}`}</p>
      <p>{`Heft: ${props.hog.weight} lbs`}</p>
      <p>{`Highest Medal Achieved: ${props.hog['highest medal achieved']}`}</p>
    </div>
  )
}

export default HogDetail
