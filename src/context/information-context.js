import React, { Component } from 'react'

export const InformationContext = React.createContext();

class InformationProvider extends Component {

  state = {
    information: 'heeeeeeeeey'
  }

  changeInformation = (newInformation) => {
    this.setState({
      information: newInformation,
    })
  }

  render() {
    return (
      <InformationContext.Provider value={{
        state: this.state,
        changeInformation: this.changeInformation,
        }}>
        {this.props.children}     
      </InformationContext.Provider>
    )
  }
}

export default InformationProvider;