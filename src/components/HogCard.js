import React, { Component } from 'react';

class HogCard extends Component {

  constructor(){
    super()
    this.state={details:false}
  }

  moreDeets = () => {
    this.setState({details:true})
  }

  render() {
    console.log(this.props)
    return (
      <div className="ui card">
      <h1>{this.props.name}</h1>
      {!this.state.details ?
        <button onClick={this.moreDeets}>Learn More</button>
        :
        <div>
        <p>Weight: {this.props.weight}</p>
        <p>Specialty: {this.props.specialty}</p>
        <button onClick={null}>I've Seen All I Need</button>
        </div>
      }

      </div>
    )
  }
}

export default HogCard;
