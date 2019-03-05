import React, { Component } from 'react';
// import logo from './logo.svg';

import Register from './Register'
import MapView from './MapView'
import NavBar from './NavBar'
import AqCard from './AqCard'
import './App.css';


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: {name: "Anonymous"},
  //     messages: [],
  //     numusers: 0,
  //     //key: uuidv4(); --- this did nothing to solve error message
  //   };
  // }

  componentDidMount() {
    console.log("Components Mounted!")
  }
  render() {
    return (
      <div>
      <div className="Menu">
      <NavBar></NavBar>
      </div>
      <div><AqCard></AqCard></div>

      <div className="Form">
        <Register></Register>
        <MapView></MapView>

      </div>
      </div>
    )
  }
}

export default App;

//<AqCard recommendation = {this.state.user_profile}  username = {this.state.currentUser.name}/>