import React from 'react'
import '../hoja-de-estilos/Boton.css'

export const Boton = ( props ) => {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return (
      <button 
          className={` boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd() } 
          onClick={ () => props.manejarClic(props.children) } >
          {props.children}
      </button>
    )


}
