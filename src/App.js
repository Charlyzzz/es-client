import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './socket'

class App extends Component {

  render() {
    return (
      <div name="app">
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App;
