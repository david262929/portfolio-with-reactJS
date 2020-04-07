import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './components/styles/configs.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // fetch('https://api.imgflip.com/get_memes')
  //     .then(response => response.json())
  //     .then(response => {
  //       const {memes} = response.data;
  //       this.setState({ allMemeImgs : memes });
  //     });

  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
