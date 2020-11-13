import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        {/* <Link to='/'>Login</Link> */}
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path='/bubble-page' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
