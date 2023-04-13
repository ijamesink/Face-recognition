import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './Rank/rank';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
                {/* {<logo />
        <ImageLinkForm />
        <FaceRecognition />} */}
      </div>
    );
  } 
}

export default App;
