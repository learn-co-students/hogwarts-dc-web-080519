import React from 'react';



const HogCards = props => {

  function returnImgName(hogname){
    return(hogname.toLowerCase().split(" ").join('_'))
  }

  function renderHogCards() {
    return props.hogs.map(hog => {
      return (
        <div className="pigTile" key={hog.name} onClick={() => {props.onSelectedHog(hog)}}>
          <img src={require('../hog-imgs/' + returnImgName(hog.name) +'.jpg')} alt = {hog.name}/>
          <h3>{hog.name}</h3>
        </div>
      )
    })
  }



  return (
    <React.Fragment>
    {renderHogCards()}
    </React.Fragment>
  )

}

export default HogCards
