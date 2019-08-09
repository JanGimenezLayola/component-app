import React from 'react'

import { InformationContext } from "../context/information-context";

const Input = () => {
  return (
    <InformationContext.Consumer>
      {value => (
        <div>
          <p>Input Coponent: {value.state.information}</p>
          <input type='text' name='newInformation' onChange={
            (event) => {
              value.changeInformation(event.target.value)
            }
          }/>
        </div>
      )}
    </InformationContext.Consumer>
    
  )
}

export default Input
