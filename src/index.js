import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Route, BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </App>
    </BrowserRouter>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
