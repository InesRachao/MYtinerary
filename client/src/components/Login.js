import React, { Component,useState } from 'react'
import {connect}    from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { login } from "../store/actions/loginActions";
 


class Login extends Component {


    constructor(props){
      super(props);
      this.state={
      email: "",
      password:""
     }
    }

    handleChange =(e)=>{
      this.setState({[e.target.name]:e.target.value})
      
    }

   
    handleSubmit = (e) => {
        e.preventDefault()
        const email = this.state.email
        const password = this.state.password
        const body = JSON.stringify({email, password})
        
        
        this.props.login(body)
    }
   
      
    
   render() {    
       return (
           <div>
             <Form onSubmit = {this.handleSubmit}>
               <Form.Group controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control name= "email" type="email" placeholder="Enter email" onChange={this.handleChange} />
               </Form.Group>
               <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control name= "password" type="password" placeholder="Password" onChange={this.handleChange}/>
               </Form.Group>
               <Button variant="primary" type="submit">
                 Submit
               </Button>
           </Form>
           </div>
       )
   }
}
const mapStateToProps = state=>({
  
})
export default connect(null, {login})(Login);