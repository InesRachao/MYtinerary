import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchActivities} from "../store/actions/activityActions";


class Activities extends Component {

componentDidMount(){
    this.props.fetchActivities("5ee91bf3260f3413fc8f4d12")
    
}

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Activities</h1>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    activities: state.activities.items
})

export default connect(MapStateToProps, {fetchActivities})(Activities)