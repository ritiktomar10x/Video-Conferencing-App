import React from 'react'
import { createContext } from 'react';

export const FormContext = createContext({});
const FormProvider = ({children}) => {
    const [formState,setFormState] = React.useState(0);

  return (
    <FormContext.Provider value={{formState,setFormState}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider