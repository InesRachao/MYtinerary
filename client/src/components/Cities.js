import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Navbar, Form, FormControl} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchCities} from "../store/actions/cityActions";
import {authGoogle} from "../store/actions/loginActions";



class Cities extends Component {

    constructor(props){
        super(props)
        this.state = {
            cities: [],
            filtered: ""            
        }
    }

    componentDidMount(){
        const url = this.props.location.search
        this.props.fetchCities()
        if (url !== "") {
           const token = url.split("=")[1]
            this.props.authGoogle(token)
        } 
    }

    handleChange = (e) => {
        this.setState({
        filtered: e.target.value
       });
    } 
    

    render() {
        console.log(this.props.location.search)
        const searchParam = this.state.filtered.toLowerCase()

        const citiesPost = this.props.cities.filter(city => {return city.name.toLowerCase().startsWith(searchParam)}).map(city => {
            const cardStyle = {
                color: "white",
                backgroundText: "white",
                height: 150,
                backgroundImage: "linear-gradient(rgba(136, 136, 136, 0), rgba(41, 37, 40, 0.73)), url(" + city.img + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
                return (
                    <Link key={city._id} to= {{pathname: "/itineraries", state: { myCity: city}}}>
                        <div>
                            <div  style = { cardStyle } >
                                <h1>{city.name}</h1>      
                            </div>
                        </div>
                    </Link>
                    )       
        })
            return (
            <div>
                <Navbar bg="light" variant="light">
                    <div className= "navBar">
                        <Navbar.Brand href="#menuIcon">
                            <img
                                alt=""
                                src="./images/menu_icon.png"
                                width="40"
                                height="40"
                                className="menu_icon"
                                
                            />{' '} 
                        </Navbar.Brand>
                        <Navbar.Brand href="#profileIcon">
                            <img
                                alt=""
                                src="./images/profile_icon.jpg"
                                width="40"
                                height="40"
                                className="profile_icon"
                                
                            />{' '}  
                        </Navbar.Brand>
                    </div> 
                </Navbar>
                <p className= "filterParagraph">Search our current cities</p>
                <Form inline>
                    <FormControl id = "mySearch" type="text" placeholder="Search" className="mr-sm-2" onChange = {this.handleChange}/>
                </Form>
                {citiesPost}
            </div>
            )}};

const MapStateToProps = state => ({
    cities: state.cities.cities
})

export default connect(MapStateToProps, {fetchCities, authGoogle})(Cities)
