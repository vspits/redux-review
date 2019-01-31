import React from 'react'
import './pagetwo.css'
import { connect } from 'react-redux'
import { deleteInformation, addCard } from '../../ducks/reducer'


const PageTwo = (props) => {
    let { name, age, email, phoneNumber } = props;
    let newObj = {
        name,
        age,
        email,
        phoneNumber
    }
    return (
        <div className="page" id="page-two-wrapper">
        <p>Your Information: </p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <button onClick={() => props.addCard(newObj)}>Confirm</button>
        <button onClick={() => props.deleteInformation()}>Reset</button>
        </div>
    )
}

function mapStateToProps(reduxState) {
    let { name, age, email, phoneNumber } = reduxState;
    return {
        name, 
        age, 
        email, 
        phoneNumber
    }
}
const mapDispatchToProps = {
    deleteInformation,
    addCard
}
export default connect(mapStateToProps, mapDispatchToProps)(PageTwo)