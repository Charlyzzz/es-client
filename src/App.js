import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div name="app" className="main">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;
