import React from 'react'
import './pagetwo.css'
import {connect} from 'react-redux'


const PageTwo = (props) => {
    let {id} = props.match.params
    return (
        <div className="page" id="page-two-wrapper">
        <h1>MATCH THIS: {id}</h1>
        <p>Your Information: </p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <button>Confirm</button>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        name: reduxState.name,
        age: reduxState.age,
        email: reduxState.email,
        phoneNumber: reduxState.phoneNumber
    }
}

export default connect(mapStateToProps)(PageTwo)