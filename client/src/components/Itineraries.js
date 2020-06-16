import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";


class Itineraries extends Component {

    componentDidMount(){
        
       this.props.fetchItineraries(this.props.location.state.myCity._id)

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Itineraries</h1>
                <Link to= {{pathname: "itineraries"}}>ITN</Link>
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




