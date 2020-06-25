import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";
import Activities from "./Activities";
import { Button, Card, Row, Col, Accordion} from 'react-bootstrap';


class Itineraries extends Component {

    constructor(props){
        super(props)
        this.state = {
            myItineraryId: "",        
        }
    }

    componentDidMount(){
        
       this.props.fetchItineraries(this.props.location.state.myCity._id)

    }


    getActivities = (id) => {
        this.setState({myItineraryId: id})
    }


    render() {
        console.log(this.state.myItineraryId)
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

         const itineraryCardStyle ={
            color: "black",
            backgroundText: "black",
            padding: "10px",
            margin: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            borderStyle: "solid",
            borderColor: "navy",

        } 
 
        return (
            <div>
                <div style = {cardStyle}>
                    <h1>{this.props.location.state.myCity.name}</h1>
                </div>

                <h1>Itineraries</h1>
                
                {this.props.itineraries.map(itinerary => { 
                    return (
                    <div key = {itinerary._id} style = {itineraryCardStyle}>
                        <Card className = "card-body">
                            <Row>
                                <Col xs="6">
                                    <img src = {itinerary.img} width = "40" height = "40" />
                                    <Link to href="#">Username</Link>
                                </Col>
                                <Col xs="6">    
                                    <h3>{itinerary.title}</h3>
                                    <p>Likes: {itinerary.rating} || Duration: {itinerary.duration} || Price: {itinerary.price}</p>
                                    <p>#</p>
                                </Col>
                            </Row>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} onClick = {() => this.getActivities(itinerary._id)} variant="link" eventKey="1">
                                        View all Activities!
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>{this.state.myItineraryId === itinerary._id && <Activities myId = {itinerary._id}/>}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Card>
                        {/* <div key = {itinerary._id}>
                            <h2>{itinerary.title}</h2>
                            <img src = {itinerary.img} width = "40" height = "40"></img>
                            <p>Likes:{itinerary.rating}</p>
                            <p>{itinerary.duration}</p>
                            <p>{itinerary.price}</p>
                            <Activities/>
                        </div> */}
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




