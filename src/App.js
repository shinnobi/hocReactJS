
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Menu from './components/Menu'
import routes from './components/Routes'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/*Menu */}
          
         <Menu/>
          {/*Noi dung */}
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
          
        </Router>
      </div>
    );
  }
  showContentMenus = (routes)=>{
    var result = null;
    if(routes.length >0){
      result = routes.map((route,index)=>{
        return (
          <Route key ={index} path ={route.path} exact={route.exact} component ={route.main} />
        )
      })
    }
    return result;
  }
}

export default App;
