import React from 'react'

import { InformationContext } from "../context/information-context";

const Input = () => {
  return (
    <InformationContext.Consumer>
      {value => (
        <div>
          <p>Input Coponent: {value.information}</p>
        </div>
      )}
    </InformationContext.Consumer>
    
  )
}

export default Input
