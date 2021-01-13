
import React, {Component} from 'react'
import {  Route, NavLink} from 'react-router-dom'
const menus = [
  {
    name:'Home',
    to:'/',
    exact:true
  },
  {
    name:'About',
    to:'/about',
    exact:false
  },
  {
    name:'Contact',
    to:'/contact',
    exact:false
  },
  {
    name:'Products',
    to:'/products',
    exact:false
  },
  {
    name:'Login',
    to:'/login',
    exact:false
  }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className={`nav-item ${active}`}>
          <NavLink to={to} className="nav-link" exact>{label}</NavLink>

        </li>
      )

    }} />
  )
}
class Menu extends Component {
  render(){
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {this.showMenus(menus)}
         
        </ul>
      </div>
    </nav>
    );
  }

  showMenus = (menus)=>{
    var result = null;
    if(menus.length >0){
      result = menus.map((menu,index)=>{
        return(<MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />)
      })
    }
    return result
  }
}

export default Menu;
