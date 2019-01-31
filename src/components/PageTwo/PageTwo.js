import React, {Component} from 'react'
import './pagetwo.css'
import { connect } from 'react-redux'


class PageTwo extends Component {
render() {
        return (
           <div className="page" id="page-two-wrapper">
            <p>Your Information: </p>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
            <p>Email: {this.props.email}</p>
            <p>Phone Number: {this.props.phoneNumber}</p>
            <button>Confirm</button>
           </div>
        )
    }
}
function mapStateToProps(reduxState) {
    let { name, age, email, phoneNumber } = reduxState;
    return {
        name, age, email, phoneNumber
    }
}
export default connect(mapStateToProps)(PageTwo)