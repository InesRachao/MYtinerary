import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from "./Navigation";


export default class Landing extends Component {
    render() {
        return (
        
        <div className = "HomePage">
            <Navigation/>
            <img src = "/images/MYtineraryLogo.png" alt = "Logo" width="250" height="100"></img>
            <div className = "Browsing">
                <p>Find your perfect trip, designed by insiders who know and love their cities</p>
                <h5>Start browsing</h5>
            </div>
            <div className ="container">
                <Link to = "/Cities"><img src="/images/circled-right-2.png" width="50" height="50"/></Link> 
            </div>
            <div className = "StartLinks">
                <p>Want to build your own MYtinerary?</p>
                <span>Log in</span>
                <span>Create Account</span>
            </div>
            <div className = "HomeButton">
                <input type="image" src="/images/homeIcon.png" alt="homeIcon" width="50" height="50" />
            </div>
        </div>
        )
    }
}
