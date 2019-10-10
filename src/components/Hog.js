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

  imageOpacity = () => {
    if (this.state.detailView) {
      return `hogpic semi-transparent`
    } else {
      return `hogpic`
    }
  }

  hideHog = (e) => {
    let thisHog = e.target.parentElement
    let hogChitlins = Array.from(e.target.parentElement.children)
    let thisButton = e.target
    if (thisHog.classList.contains('hiding')) {
      thisHog.classList.remove('hiding')
      hogChitlins.forEach(el => el.classList.remove('hidden-hog'))
      thisButton.classList.remove('compact', 'regret-button')
      thisButton.innerText = `Go AWAY you dumb HOG`
    } else {
      thisHog.classList.add('hiding')
      hogChitlins.forEach(el => el.classList.add('hidden-hog'))
      thisButton.classList.remove('hidden-hog')
      thisButton.classList.add('compact', 'regret-button')
      thisButton.innerText = `Wait no please come back I didn't know I loved you until you were gone`
    }
  }

  render() {
    return(
      <div className='ui centered raised card'>
          <div className='image hogcard'>
            <img alt='great hog' src={require(`../hog-imgs/${this.imagePath(this.props.name)}.jpg`)} className={this.imageOpacity()}/>
            <div className='hoginfo'>{this.state.detailView ? this.hogDetails() : null}</div>
          </div>
          <div className='description'><h1>{this.props.name}</h1></div>
          <button onClick={this.showOrHideDetails} className='small ui button' style={{backgroundColor: '#F5A9BC', color:'white'}}>See them details</button>
        <button onClick={this.hideHog} className='small ui button' style={{backgroundColor: 'black', color:'white', opacity:1}}>Go AWAY you dumb HOG</button>
      </div>
    )
  }
}

export default Hog