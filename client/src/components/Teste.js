import React, { Component} from 'react';
import {connect} from 'react-redux';
import { fetchComments, addComments, deleteComments, updatedComments } from "../store/actions/commentActions";
import { Form, Button, Modal } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import EditComment from "./EditComment"

class Teste extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "",  
            modal: false,
            comments: "",         
        }
    };

    toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      };

    onChange = (e) => {
        this.setState({
          comments: e.target.value,
        });
      };
    componentDidMount(){
        console.log(this.props.myId)
        this.props.fetchComments (this.props.myId)
        
    }
    
    handleChange = (e) =>{
        this.setState({text: e.target.value})
        console.log(this.state.text)
        
    }

    submitComments = (e) => {
        e.preventDefault()
        const text = this.state.text
        const body = JSON.stringify({text})
        //window.location.reload(true)
        console.log("add comments being used")
        console.log()
        this.props.addComments(this.props.myId, body)
    }  



    render () {
        
        console.log(this.props)
        const commentboxStyle = {
            display: "flex",
            flexWrap: "wrap",
            margin: "10px",
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: "grey",
            justifyContent: "space-evenly",
        } 
        
        let comment = this.props.comments.map((comments, index) => {
    
            return (
                <div style = {commentboxStyle} key={index}>
                    <div>
                        <img
                        width={50}
                        height={50}
                        style={{borderRadius: "50%"}}
                        className="align-self-start mr-3"
                        src={comments.avatar}
                        alt=""
                        />
                        <div>
                        <h6>{comments.name}</h6>
                        <p>{comments.text}</p>
                        <i>{comments.date}</i>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <div type="button" onClick={() => this.props.deleteComments(comments._id)}><BsFillTrashFill color = "black"/></div>
                            <div>
                                <EditComment myId = {comments._id}/>
                            </div>       
                        </div>
                        
                        </div>
                    </div>
                </div>
                
            )
        })
        return (
            <div>
                <Form onSubmit={this.submitComments}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{marginBottom: 0}}>Write a Comment</Form.Label>
                        <Form.Control type="text" as="textarea" rows="2" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{height:22, paddingTop:0}}>
                    Submit
                    </Button>
                    
                </Form>    
                <div>
                   
                    {comment}
                  
                </div>
                
            </div>
        )
    }
}
const MapStateToProps = state => ({
    comments: state.comments.comments,
    comment: state.comments.comment
})
export default connect(MapStateToProps, {fetchComments, addComments, deleteComments, updatedComments})(Teste)