// Write code for Registration context
import React, { Children, useContext } from "react";

export const RegistrationContext = useContext("");

function RegistrationContextProvider({ Children }) {
  return (
    <RegistrationContext.Provider>{Children}</RegistrationContext.Provider>
  );
}

export default RegistrationContextProvider;
