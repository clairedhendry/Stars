import React from 'react';
import "./App.css";
import Stars from './components/stars'

export default class App extends React.Component {

  render() {
    return (
      <>
      <div id="container" className="App">
        <Stars />
      </div>
     
      </>
    )
  }
}