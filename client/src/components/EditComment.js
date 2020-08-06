import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updatedComments } from "../store/actions/commentActions";
import { Form, Button, Modal } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';


class EditComment extends Component {
    constructor(props){
        super(props)
        this.state = { 
            modal: false,
            text: "",
                    
        }
    };

    toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      };
    

    handleChange = (e) =>{
        this.setState({text: e.target.value})
        console.log(this.state.text)
        
    }

    fixComments = (id) => {
        const text = this.state.text
        const body = JSON.stringify({text})
        //window.location.reload(true) 
        console.log(id)
        this.props.updatedComments(id, body)
        
        
    }



    render() {
        console.log(this.props._id)
        return (
            <div>
                <Button variant="primary" onClick={this.toggle}><BsPencil color = "black"/></Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <Form >
                            <Form.Group controlId="exampleForm.ControlTextarea">
                                <Form.Label style={{marginBottom: 0}}>Edit your Comment</Form.Label>
                                <Form.Control type="text" as="textarea" rows="2" onChange = {this.handleChange}/>
                            </Form.Group>
                            <Button variant="primary" style={{height:22, paddingTop:0}} onClick = { ()=> this.fixComments(this.props.myId)}>
                            Submit
                            </Button> 
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}



export default connect(null, { updatedComments})(EditComment)




