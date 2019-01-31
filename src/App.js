import React, { Component } from 'react';
import './App.css';
import './components/pages.css'
import Nav from './components/Nav/Nav';
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageThree/PageTwo';
import PageThree from './components/PageTwo/PageThree';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       <PageOne />
       <PageTwo />
       <PageThree />
      </div>
    );
  }
}

export default App;
