import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchActivities} from "../store/actions/activityActions";
import { Carousel } from "react-bootstrap";


class Activities extends Component {

    componentDidMount(){
        this.props.fetchActivities(this.props.myId)
        
    }


    render() {

        
       let crItem = this.props.activities.map(activ => {

            return (
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {activ.img}
                        alt="Activity"
                        />

                        <Carousel.Caption>
                            <h3>{activ.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item> 
              
            )
            
        })
        
        return (
            <div>
                <Carousel>
                    {crItem}
                </Carousel>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    activities: state.activities.items
})

export default connect(MapStateToProps, {fetchActivities})(Activities)