import React from 'react'
import { useState } from 'react';

const Button = ({fn, texto}) => {

    console.log("render boton")

    return(
        <button onClick={()=>fn()}> {texto} </button>
    )
}


export default Button

