import React from "react";
import Chield from "./Chield";

import './App.css'

export default class Parent extends React.Component{
    
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount children', this.props.children)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate children', this.props.children)
    }
}