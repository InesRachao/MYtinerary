import React, { Component } from 'react'
import {Navbar, Nav,Image, OverlayTrigger, Tooltip } from 'react-bootstrap'


class Navigation extends Component {

    renderTooltip = ()=>{
        return <Tooltip >
            <Nav className="flex-column">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/createaccount">Create Account</Nav.Link>
            </Nav>
        </Tooltip>;  
    }
    
    
    render() {
        const Example = (props) => ( 
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip()}
            > 
              <Image src="images/profile_icon.jpg" 
              roundedCircle 
              height={40} 
              width={40} 
              /> 
            
            </OverlayTrigger>
          );
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">   
                        <Example/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="cities">Cities</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="createaccount">Create Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Navigation




