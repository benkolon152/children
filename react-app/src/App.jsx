import React from 'react'
import Parent from './Parent'
import Chield from './Chield'

import './App.css'

export default class App extends React.Component{
  state = {
    cntChildren: 3
  }

  handleAppendChildClick = buttonId => this.setState({cntChildren: this.state.cntChildren+1})

  handleChildMessageRetrieval = message => {
    console.log('message', message)
    console.log('sender child name', message.me.props.name)
    console.log('message', message.message)
  }

  render(){
    return (
      <div>
        <p>
          <button id='btnAppendChild' onClick={()=>this.handleAppendChildClick("btnAppendChild")}>Append child</button>
          <Parent>
            {Array.from(
              {length: this.state.cntChildren},
              (elem, idx) => (
                <Chield key={idx} name={`Viktor ${idx+1}`}
                onChildMessageRetrieval={this.handleChildMessageRetrieval}
                />
              )
              )}
          </Parent>
        </p>
      </div>
    )
  }
}