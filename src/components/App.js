import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigpen from './Pigpen'
import Filter from './Filter'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />

          < Pigpen hogs={hogs} />
      </div>
    )
  }
}

export default App;
