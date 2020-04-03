import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import Nav from "./components/nav";
import Button from "@material-ui/core/Button";
import Dashboard from "./components/dashboard.js";
import dashboard from "./components/dashboard.js";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loggedin: false
    }
  }

  render() {
    if (!this.state.loggedin){

    
    return (
      <div className="App">
        <Nav/>
        <div className="LoginForm">
          <TextField label="Username" />
          <TextField label="Password" />
          <Button variant="contained" onClick={() => {
            this.setState({loggedin:true})
          }}>Submit</Button>
        </div>
      </div>
    );
    }
    else{
      return (
        <div className='App'>
        <Nav/>
        <Dashboard/>
        </div>
      )
    }
  }
}

export default App;
