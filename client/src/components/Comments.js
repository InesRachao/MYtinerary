import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchComments, addComments, deleteComments} from "../store/actions/commentActions";
import {Media, Form, Button} from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';


class Comments extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: "",           
        }
    }


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
    }  

    




render () {
    console.log(this.props)

    let comment = this.props.comments.map(comments => {
        

        return (
            
            
            <div className="list-unstyled">
                <Media as="li">
                    <img 
                    src = {comments.profile_img}
                    width={64}
                    height={64}
                    className="mr-3"
                    src="holder.js/64x64"
                    alt="d"
                    />
                    <Media.Body>
                        <h5>{comments.userName}</h5>
                        <p>
                            {comments.text}
                        </p>
                        <p>
                            {comments.date}
                        </p>
                        <div type="button" onClick={() => this.props.deleteComments(comments._id)}><BsFillTrashFill color = "black"/></div> 
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
                <Media>
                    {comment}
                </Media>
            </div>           
        </div>
            
        
        
    )
    
    
    
}

}

const MapStateToProps = state => ({
    comments: state.comments.comments
})

export default connect(MapStateToProps, {fetchComments, addComments, deleteComments})(Comments)
    
    


