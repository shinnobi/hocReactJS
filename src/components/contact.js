
import React, {Component} from 'react'
import {Prompt} from 'react-router-dom'
class Contact extends Component {
  constructor(props){
    super(props)
    this.state={
      isChecked :false
    }
  }
  onClick =(isChecked)=>{
    this.setState({
      isChecked:isChecked
    })
  }
  render(){
    return (
      <div className="conatainer">
          <h1>Đây là trang Contact</h1> <br/>
        <button type ="button" className="btn btn-info" onClick={()=>this.onClick(false)}>Accept</button> <br/>
        <button type ="button" className="btn btn-warning"onClick={()=>this.onClick(true)}>Abandon</button> <br/>
        <Prompt
        when={this.state.isChecked}
        message={location => (`you are sure to go to page ${location.pathname}`)}
        />
      </div>
    );
  }
}

export default Contact;
