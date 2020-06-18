import React from "react";
import Navbar from "/Users/marcelobarbosa/Documents_copy/teksystems/react/practice/src/components/layout/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

class App extends React.Component {
  componentDidMount(){
    axios.get('https://api.github.com/users').then(res=>console.log(res.data))
  }
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
