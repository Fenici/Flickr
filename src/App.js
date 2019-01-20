import React, { Component } from 'react';
// import './App.css';
import Flickr from './component/flickr/Flickr';
import Card from './component/card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is Flickr Public Image Feed</h1>
         <Flickr />
         {/* <Card /> */}
        </header>
      </div>
    );
  }
}

export default App;
