import React, { Component } from 'react';
class Login extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState() {
        this.setState({data: 'Data updated...'})
     }
     render() {
        return (
            <form align="center">
            <h3>Log in</h3>
            <input type="text" placeholder="username" /><br/><br/>
            <input type="password" placeholder="password" /><br/>
            <input type="submit" value="Login" /><br/>
            Forgot your Username/Password? <a href="#">Recover it!</a> 
            
        </form>
        );
     }
  }
export default Login;