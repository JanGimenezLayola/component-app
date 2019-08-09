import React, { Component } from 'react'

export const InformationContext = React.createContext();

class InformationProvider extends Component {

  state = {
    information: 'heeeeeeeeey'
  }

  render() {
    return (
      <InformationContext.Provider value={this.state}>
        {this.props.children}     
      </InformationContext.Provider>
    )
  }
}

export default InformationProvider;