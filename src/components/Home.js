import React, { Component } from 'react'

class Home extends Component {
  
  state = {
    information: 'some information'
  }

  render() {
    return (
      <div>
        {this.state.information}
      </div>
    )
  }
}

export default Home;