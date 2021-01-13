
import React, {Component} from 'react'

class Login extends Component {
  render(){
    return (
    <div className="row">
<div className= "col-xs-6 col-sm-6 col-md-6 col-lg-6">
<form>
<div className="form-group">
    <label for="">User Name</label>
    <input type="email" className="form-control" name="txtUsername" id="" aria-describedby="emailHelpId" placeholder=""/>
    <small id="emailHelpId" className="form-text text-muted">User Namet</small>
  </div>
  <div className="form-group">
    <label for="">Pass Word</label>
    <input type="password" className="form-control" name="txtPassword" id="" placeholder=""/>
  </div>

  <button type="button" className="btn btn-primary"></button>
</form>
 
</div>

    </div>
    );
  }
}

export default Login;
