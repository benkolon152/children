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
        console.log('children', this.props.children)
    }
}