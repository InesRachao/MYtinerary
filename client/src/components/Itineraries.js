import React, { Component, useState } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";
import Activities from "./Activities";
import { Button, Card, Row, Col, Accordion} from 'react-bootstrap';
import { fetchFavourites} from "../store/actions/userActions";
import { BsFillHeartFill } from 'react-icons/bs';
import { addFavourites} from "../store/actions/userActions";
import { removeFavourites} from "../store/actions/userActions";
import Navigation from "./Navigation";
import {fetchComments} from "../store/actions/commentActions";

class Itineraries extends Component {

    constructor(props){
        super(props)
        this.state = {
            addedfav: [],
            myItineraryId: "",        
        }
    }


    componentDidMount(){
        const id = this.props.location.state.myCity._id

            this.props.fetchItineraries(id)
       
            this.props.fetchComments("5ee91bf3260f3413fc8f4d12")

    }


    componentWillMount(){
        if(localStorage.token){

            this.props.fetchFavourites()
        }
    }


    handleClick = (id) =>{
        if(!localStorage.token){
            alert("You must be logged in to add a favourite")

            this.props.history.push("/login")

        } else {
            let fav = this.props.favourites.filter(favourite =>
                favourite.itineraryID === id);
            console.log(fav);

            if(fav.length === 0){
                this.props.addFavourites(id)
                
            } else {
                this.props.removeFavourites(id)
    
                let myIndex = this.state.addedfav.indexOf(id)
                this.state.addedfav.splice(myIndex, 1)
                
            }
        }
               
    }

        

    getActivities = (id) => {
        this.setState({myItineraryId: id})
    }


    render() {
        console.log(this.props)
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


        if(this.props.favourites !== undefined){

            this.props.favourites.map(fav => {
                if(!this.state.addedfav.includes(fav.itineraryID)){
                    this.state.addedfav.push(fav.itineraryID)
                }
            })
        }

        let itn = this.props.itineraries.map(itinerary => {
            let button;

            if(this.state.addedfav.includes(itinerary._id)){
                button = (
                    <div type="button" onClick={() => this.handleClick(itinerary._id)}><BsFillHeartFill color = "red"/></div>
                )
            } else {
                button = (
                    <div type="button" onClick={() => this.handleClick(itinerary._id)}><BsFillHeartFill color = "grey"/></div>
                )
                
            }
        
 
            return (
                <div>
                        <div key = {itinerary._id} style = {itineraryCardStyle}> 
                            <Card className = "card-body">
                                <Row>
                                    <Col xs="6">
                                        <img src = {itinerary.img} width = "40" height = "40" />
                                        <Link to href="#">User</Link>
                                    </Col>
                                    <Col xs="6">    
                                        <h3>{itinerary.title}</h3>
                                        <p>Likes: {itinerary.rating} || Duration: {itinerary.duration} || Price: {itinerary.price}</p>
                                        <p>#</p>
                                        <p>{button}</p>
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
                        </div>
                </div>
            )
        })
        return (
            <div>
                <Navigation/>
                <div style = {cardStyle}>
                    <h1>{this.props.location.state.myCity.name}</h1>
                </div>

                <h1>Itineraries</h1>
                {itn}
                <Link to= {{pathname: "cities"}}>Choose another city</Link>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    itineraries: state.itineraries.itineraries,
    favourites: state.userfavs.favouritesItn,
    comments: state.comments.comments,
})

export default connect(MapStateToProps, { fetchItineraries , addFavourites,  fetchFavourites, removeFavourites, fetchComments })(Itineraries)








