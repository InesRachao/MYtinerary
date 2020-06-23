import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";
import Activities from "./Activities";


class Itineraries extends Component {

    componentDidMount(){
        
       this.props.fetchItineraries(this.props.location.state.myCity._id)

    }
    render() {
        const cardStyle ={
            color: "white",
            backgroundText: "white",
            height: 150,
            backgroundImage: "linear-gradient(rgba(136, 136, 136, 0), rgba(41, 37, 40, 0.73)), url(" + this.props.location.state.myCity.img + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }

        /* const itineraryCardStyle ={
            color: "white",
            backgroundText: "white",
            height: 150,
            backgroundImage: "linear-gradient(rgba(136, 136, 136, 0), rgba(41, 37, 40, 0.73)), url(" + itinerary.img + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        } 
 */
        return (
            <div>
                <div style = {cardStyle}>
                    <h1>{this.props.location.state.myCity.name}</h1>
                </div>

                <h1>Itineraries</h1>
                
                {this.props.itineraries.map(itinerary => { 
                    return (
                        <div key = {itinerary._id}>
                            <h2>{itinerary.title}</h2>
                            <img src = {itinerary.img} width = "40" height = "40"></img>
                            <p>Likes:{itinerary.rating}</p>
                            <p>{itinerary.duration}</p>
                            <p>{itinerary.price}</p>
                            <Activities/>
                        </div>
                    )

                })}
            </div>
        )
    }
}

const MapStateToProps = state => ({
    itineraries: state.itineraries.itineraries
})

export default connect(MapStateToProps, {fetchItineraries})(Itineraries)


/* export default class Itineraries extends Component {
    render() {
        return (
            <div>
               <h1>Itineraries</h1> 
               <Link to= {{pathname: "cities"}}>Cities</Link>
            </div>
        )
    }
} */




