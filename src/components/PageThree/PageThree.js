import React from 'react'
import { connect } from 'react-redux'
import './pagethree.css'


const PageThree = props => {
    let display = props.cardList.map(item => {
        return (
            <div className="card-item">
                {item.name} <br/>
                {item.age} <br/>
                {item.email} <br/>
                {item.phone} <br/>
            </div>
        )
    })
return (
        <div className="page" id="page-three-wrapper">
        List of Cards: <br/>
        {display}
        </div>
    )
}
const mapStateToProps = reduxState => {
    let { cardList } = reduxState;
    return {
        cardList
    }
}
export default connect(mapStateToProps)(PageThree)