import React, {Component} from 'react'
import './pageone.css'


export default class PageOne extends Component {
render() {
        return (
           <div className="page" id="page-one-wrapper">
            Name: <input type="text"/>
            Age: <input type="text"/>
            Email: <input type="text"/>
            Phone Number: <input type="text"/>
            <button>Submit</button>
           </div>
        )
    }
}