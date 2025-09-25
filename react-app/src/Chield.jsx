import React from "react";

import './App.css'

export default class Chield extends React.Component{
    state = {
        //name: 'Viktor'
    }

    handleChildButtonClick = me => {
        console.log('handleChildButtonClick me', me)

        this.props.onChildMessageRetrieval({
            me, message: "I'm hungry!"
        })
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.handleChildButtonClick(this)}>Hello, I am a child, My name is {this.props.name}</button>
            </div>
        )
    }
}