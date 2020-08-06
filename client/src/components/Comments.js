import React, { Component, useState } from 'react';
import {connect} from 'react-redux';
import {fetchComments, addComments, deleteComments, updatedComments} from "../store/actions/commentActions";
import { Media, Form, Button, Modal } from 'react-bootstrap';
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';


class Comments extends Component {

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

        this.props.fetchComments(this.props.myId)
        
    }

    

    handleChange = (e) =>{
        this.setState({text: e.target.value})
        console.log(this.state.text)
        
    }


    submitComments = (e) => {
        e.preventDefault()
        const text = this.state.text
        const body = JSON.stringify({text})

        this.props.addComments(this.props.myId, body)
        //window.location.reload(true)

    }  


    updateComments = (id) => {
        const text = this.state.text
        const body = JSON.stringify({text})

        console.log(id)

        this.props.updatedComments(id, body)
        //window.location.reload(true) 
        
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

        
        let comment = this.props.comments.map(comments => {
            console.log(comments._id)
    

            return (

                <div style = {commentboxStyle}>

                    <Media>
                        <img
                        width={64}
                        height={64}
                        className="align-self-start mr-3"
                        src={comments.profile_img}
                        alt=""
                        />
                        <Media.Body>
                        <h4>{comments.userName}</h4>
                        <p>{comments.text}</p>
                        <i>{comments.date}</i>
                        <div>
                            <a type="button" onClick={() => this.props.deleteComments(comments._id)}><BsFillTrashFill color = "black"/></a>
                            <div>
                                <Button variant="primary" onClick={this.toggle}><BsPencil color = "black"/></Button>
         
                                <Modal id = {comments._id} show={this.state.modal} onHide={this.toggle}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <Form >
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{marginBottom: 0}}>Edit your Comment</Form.Label>
                                            <Form.Control type="text" as="textarea" rows="2" onChange = {this.handleChange}/>
                                        </Form.Group>
                                        <Button variant="primary" style={{height:22, paddingTop:0}} onClick = { ()=> this.updateComments(comments._id)}>
                                        Submit
                                        </Button> 
                                    </Form>
                                </Modal.Body>
                                </Modal>
                            </div>       
                        </div>
                        
                        </Media.Body>
                    </Media>
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

export default connect(MapStateToProps, {fetchComments, addComments, deleteComments, updatedComments})(Comments)
    
    


