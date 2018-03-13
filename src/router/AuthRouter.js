import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
export default class extends Component{
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this)
    }

    render(){
        return (
            <div></div>
        )
    }
}