import React from 'react'
import Hog from './Hog'

const HogContainer = (props) => {
  const makeHogs = () => {
    return props.hogs.map(hog => {
      return <Hog key={hog.name} {...hog}/>
    })
  }

return(
  <div>
    <div className="normalText">A React App for County Fair Hog Fans</div>
    <hr />
    <button className='ui compact small blue button' onClick={()=>props.changeFilter('alphabetize')}>I hate unalphabetized lists show me these hogs in ORDER</button>
    <button className='ui compact small green button' onClick={()=>props.changeFilter('weight')}>He ain't heavy, he's my list of hogs sorted by weight</button>
    <button className='ui compact small brown button' onClick={()=>props.changeFilter('greasy')}>Mmmm yeah only show me them greasy dirty hog boiz</button>
    <button className='ui compact small white button' onClick={()=>props.changeFilter('clear')}>Get these FILTERS out of my FACE</button>
    <hr />
    <div className='ui cards three wide grid container'>
      {makeHogs()}
    </div>
  </div>
)
}

export default HogContainer