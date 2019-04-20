import React, { Component } from "react";
import { Button, FormGroup, FormControl, h5  } from "react-bootstrap";
import { Redirect,Link } from 'react-router-dom';
import Sidebar from '../Sidebar'

export default class Signin extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
      username: "",
      password: "",
      showingAlert: false,
      loggedIn
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUser(e){
    this.setState({username:e.target.value})
}

handlePassword (p){
    this.setState({password:p.target.value})
}
  handleSubmit = event => {
    event.preventDefault();
    const {username,password} = this.state;

    if(username === "bechu" && password ==="bechu"){

            this.setState({
                loggedIn: true

            })

        }
      else{
        

        this.setState({
          loggedIn:false,
         showingAlert: true
            });

            setTimeout(() => {
              this.setState({
                showingAlert: false
              });
            }, 3000);

      }

   
    
  }


  render() {

          if(this.state.loggedIn){
            return <Link>
                    <Sidebar />
            </Link>
          }
         
    return (
      <div className="Login">

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <h5>Email</h5>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleUser}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <h5>Password</h5>
            <FormControl
              value={this.state.password}
              onChange={this.handlePassword}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
           <div className={`alert alert-success ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                              <strong>Wrong Password!</strong> 
                         </div>

        </form>
      </div>
    );
  }
}