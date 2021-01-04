
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'nav-item active' : 'nav-item';
      return (
        <li className={active}>
          <NavLink to={to} className="nav-link" exact>{label}</NavLink>

        </li>
      )

    }} />
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/*Menu */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                <MenuLink label="About" to="/about" activeOnlyWhenExact={false} />
                <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
              </ul>
            </div>
          </nav>

          {/*Noi dung */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
