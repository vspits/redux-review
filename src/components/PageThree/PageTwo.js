import React, {Component} from 'react'
import './pagetwo.css'


export default class PageTwo extends Component {
render() {
        return (
           <div className="page" id="page-two-wrapper">
            <p>Your Information: </p>
            <p>Name: text-here</p>
            <p>Age: text-here</p>
            <p>Email: text-here</p>
            <p>Phone Number: text-here</p>
            <button>Confirm</button>
           </div>
        )
    }
}