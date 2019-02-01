import React, { Component } from 'react'
import './pageone.css'
import { updateEverything} from '../../ducks/reducer'
import { connect } from 'react-redux'


class PageOne extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            age: '',
            email: '',
            phoneNumber: ''
        }
    }

    handleChange(field, value){
        this.setState({[`${field}`]: value})
    }

    render() {
        console.log(this.state)
        return (
            <div className="page" id="page-one-wrapper">
            Name: <input value={this.state.name} onChange={(e) => this.handleChange("name", e.target.value)}type="text"/>
            Age: <input value={this.state.age} onChange={(e) => this.handleChange("age", e.target.value)}type="text"/>
            Email: <input value={this.state.email} onChange={(e) => this.handleChange("email", e.target.value)}type="text"/>
            Phone Number: <input value={this.state.phoneNumber} onChange={(e) => this.handleChange("phoneNumber", e.target.value)}type="text"/>
            <button onClick={() => this.props.updateEverything(this.state)}>Submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateEverything
}

export default connect(null, mapDispatchToProps)(PageOne)