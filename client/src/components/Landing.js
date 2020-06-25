import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
        <div className = "HomePage">
            <img src = "/images/MYtineraryLogo.png" alt = "Logo" width="250" height="100"></img>
            <div className = "Browsing">
                <p>Find your perfect trip, designed by insiders who know and love their cities</p>
                <h2>Start browsing</h2>
            </div>
            <div className ="container">
                <Link to = "/Cities"><img src="/images/circled-right-2.png" width="100" height="100"/></Link> 
            </div>
            <div className = "StartLinks">
                <p>Want to build your own MYtinerary?</p>
                <span>Log in</span>
                <span>Create Account</span>
            </div>
            <div className = "HomeButton">
                <input type="image" src="/images/homeIcon.png" width="50" height="50" />
            </div>
        </div>
        )
    }
}
