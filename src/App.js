import React, { Component } from 'react'
import { Database } from "./Firebase";
import './App.css'

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
      <div className="App">
        <h1>Hello Kareem</h1>
        {JSON.stringify(this.state.data, null, 2)}
      </div>
    );
  }
}

export default App;
