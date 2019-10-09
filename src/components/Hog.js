import React from 'react'

class Hog extends React.Component {
  constructor() {
    super()
    this.state = {
      detailView: false
    }
  }

  imagePath = (properName) => {
    return properName.replace(/\s+/g, '_').toLowerCase();
  }

  showOrHideDetails = () => {
    this.state.detailView ? this.setState({detailView: false}) : this.setState({detailView: true})
  }

  hogDetails = () => {
    return(
      <div>
        <p><strong>Specialty:</strong> {this.props.specialty}</p>
        <p><strong>Weight:</strong> {this.props.weight} kg</p>
        <p><strong>Highest Medal:</strong> {this.props['highest medal achieved']}</p>
        <p><strong>Nasty Greasy Boi:</strong> {this.props.greased ? 'Oh yeah you know it' : 'Nah (at least not yet)'}</p>
      </div>
    )
  }

  render() {
    return(
      <div className='ui centered raised card'>
        <div className='image hogcard'>
          <img alt='great hog' src={require(`../hog-imgs/${this.imagePath(this.props.name)}.jpg`)} className='hogpic'/>
          <div className='hoginfo'>{this.state.detailView ? this.hogDetails() : null}</div>
        </div>
        <div className='description'><h1>{this.props.name}</h1></div>
        <button onClick={this.showOrHideDetails} className='small ui button' style={{backgroundColor: '#F5A9BC', color:'white'}}>See them details</button>
      </div>
    )
  }
}

export default Hog