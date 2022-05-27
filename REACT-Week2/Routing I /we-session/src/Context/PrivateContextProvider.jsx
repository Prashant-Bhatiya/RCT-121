import React, { Children, useContext } from 'react'

const PrivateContext = useContext()

function PrivateContextProvider() {
  return (
    <PrivateContext.Provider>
      {Children}
    </PrivateContext.Provider>
  )
}

export default PrivateContextProvider