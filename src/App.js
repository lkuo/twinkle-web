import React, {Component} from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Home} from "./home/Home";
import {Login} from "./login/Login";
import {Register} from "./register/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='login'>Login</Link>
          <Link to='register'>Register</Link>
        </nav>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </div>
      </div>
    );
  }
}

export default App;
