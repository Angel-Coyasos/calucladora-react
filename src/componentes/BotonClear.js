import React from 'react'
import '../hoja-de-estilos/BotonClear.css'

export const BotonClear = ( props ) => {
  return (
    <button className='boton-clear' onClick={ props.manejarClear }>
        {props.children}
    </button>
  )
}