import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Database } from "./Firebase";
import './App.css'
import SignIn from './components/SignIn'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    Database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <SignIn />
        </div>
      </Router>
    );
  }
}

export default App;
