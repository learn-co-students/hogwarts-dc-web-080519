import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer.js'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      alphaFilter: false,
      weightFilter: false,
      greaseFilter: false
    }
  }

  changeFilter = (crit) => {
    if (crit === 'alphabetize') {
      let newHogs = [...this.state.hogs]
      newHogs.sort((a,b) => {
        return a.name > b.name ? 1 : -1
      })
      this.setState({hogs:newHogs, alphaFilter:true, weightFilter:false})
    } else if (crit === 'weight') {
      let newHogs = [...this.state.hogs]
      newHogs.sort((a,b) => {
        return a.weight - b.weight
      })
      this.setState({hogs:newHogs, alphaFilter:false, weightFilter:true})
    } else if (crit === 'greasy') {
      if (this.state.greaseFilter) {
        this.setState({greaseFilter:false})
        if (this.state.alphaFilter) {
          this.setState({hogs:hogs},
            ()=>this.changeFilter('alphabetize')
          )
        } else if (this.state.weightFilter) {
          this.setState({hogs:hogs},
            ()=>this.changeFilter('weight')
          )
        } else {
          this.setState({hogs:[...hogs]},
            ()=>this.changeFilter('clear')
          )
        }
      } else {
        let newHogs = [...this.state.hogs].filter(hog => hog.greased === true)
        this.setState({hogs: newHogs, greaseFilter:true})
      }
    } else if (crit === 'clear') {
      let newHogs = [...hogs]
      this.setState({hogs: newHogs})
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={this.state.hogs} changeFilter={this.changeFilter}/>
      </div>
    )
  }
}

export default App;
