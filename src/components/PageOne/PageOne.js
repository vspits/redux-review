import React, {Component} from 'react'
import { connect } from 'react-redux'
import './pageone.css'
import { updateInformation, deleteInformation } from '../../ducks/reducer'

// new branch
class PageOne extends Component {

constructor() {
    super();
    this.state = {
        name: '',
        age: '',
        email: '',
        phoneNumber: ''
    }
}

handleChange(field, value) {
    this.setState({ [`${field}`]: value})
}

resetState() {
    this.setState({ name: '', age: '', email: '', phoneNumber: ''});
}
updateInfo() {
    this.resetState();
    this.props.updateInformation(this.state);
}

render() {
        return (
           <div className="page" id="page-one-wrapper">
            Name: <input value={this.state.name} type="text" onChange={(e) => this.handleChange("name", e.target.value)}/>
            Age: <input value={this.state.age} type="text" onChange={(e) => this.handleChange("age", e.target.value)}/>
            Email: <input value={this.state.email} type="text" onChange={(e) => this.handleChange("email", e.target.value)}/>
            Phone Number: <input value={this.state.phoneNumber} type="text" onChange={(e) => this.handleChange("phoneNumber", e.target.value)}/>
            <button onClick={() => this.updateInfo()}>Submit</button>
           </div>
        )
    }
}

let mapDispatchtoProps = {
    updateInformation,
    deleteInformation
}

export default connect(null, mapDispatchtoProps)(PageOne)