import React from "react";

import './App.css'

export default class Chield extends React.Component{
    state = {
        //name: 'Viktor'
    }

    render(){
        return(
            <div>
                <button>Hello, I am a child, My name is {this.props.name}</button>
            </div>
        )
    }
}