import React from "react";

import './App.css'

export default class Chield extends React.Component{
    state = {
        name: 'O1G'
    }

    render(){
        return(
            <div>
                <button>Hello, I am a child, My name is {this.state.name}</button>
            </div>
        )
    }
}