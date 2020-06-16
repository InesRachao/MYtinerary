import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCities} from "../store/actions/cityActions";



class Cities extends Component {

    componentDidMount(){
        
        this.props.fetchCities()

    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.cities.map(city => {
                    return (
                    <Link to= {{pathname: "itineraries", state:{myCity: city}}}><h1>{city.name}</h1></Link>
                    )
                })}
                
            </div>
        )
    }
}

const MapStateToProps = state => ({
    cities: state.cities.cities
})

export default connect(MapStateToProps, {fetchCities})(Cities)
