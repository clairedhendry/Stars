import React from 'react';
import "./App.css";
import { Route } from 'react-router-dom'

import HomePage from './components/homepage'
import ChapterDisplay from './components/chapterDisplay'
import Stars from './components/stars'

export default class App extends React.Component {

  render() {
    return (
      <>
      <div id="container" className="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/chapter/:name" component={ChapterDisplay} />
      </div>
     
      </>
    )
  }
}