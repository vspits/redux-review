import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import './App.css';
import './components/pages.css'
import routes from './routes';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <HashRouter>
            {routes}
        </HashRouter>
      </Provider>
    )
  }
}

export default App;