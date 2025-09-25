import React from 'react'

import './App.css'

export default class App extends React.Component{
  state = {
    cntChildren: 3
  }

  handleAppendChildClick = buttonId => this.setState({cntChildren: this.state.cntChildren+1})


  render(){
    return (
      <div>
        <p>
          <button id='btnAppendChild' onClick={()=>this.handleAppendChildClick("btnAppendChild")}>Append child</button>
        </p>
      </div>
    )
  }
}