import React from 'react'

const Form = ({handlerName, country}) => {
  return (
    <section>
        <label htmlFor="inp_country">Find countries </label>
        <input type="text" id="inp_country" onChange={handlerName} value={country}/>
    </section>
  )
}

export default Form