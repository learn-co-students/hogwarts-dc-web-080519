import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import HogDetail from './HogDetail'
import FilterSorts from './FilterSorts'

class App extends Component {

  constructor() {
    super()
    this.state = {
      chosenHog: null,
      filter: "false",
      allHogs: hogs
    }
  }

  onSelectedHog = (hog) => {
    this.setState({
      chosenHog: hog
    })
  }

  sortHogs = (filter) => {
    let newHogs = JSON.parse(JSON.stringify(hogs))
    if (filter === 'name'){
      return newHogs.sort((a,b)=> {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }})
    }
    else if(filter === 'weight'){
      return newHogs.sort((a,b)=> {
        if (a.weight < b.weight) {
          return -1;
        }
        if (a.weight > b.weight) {
          return 1;
        }})
    }
    else {
      return hogs
    }
  }


  onFilterChange = (event) => {
    let filter = event.target.value
    console.log(filter)
      this.setState({
        allHogs: this.sortHogs(filter)
      }, () => console.log(this.state.allHogs))
  }

  filterGreased = () => {
    let newBool = !this.state.filter
    this.setState({
      filter: newBool
    })
    if (this.state.filter) {
      this.setState({
        allHogs: hogs.filter(hog => hog.greased === true)
      })
    }
    else {
      this.setState({
        allHogs: hogs
      })
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
        < FilterSorts onFilterChange={this.onFilterChange} filterGreased={this.filterGreased}/>
          {this.state.chosenHog === null ? null : <HogDetail hog={this.state.chosenHog}/>}
          < HogsContainer hogs={this.state.allHogs} onSelectedHog={this.onSelectedHog}/>
      </div>
    )
  }
}

export default App;
