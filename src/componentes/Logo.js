import React from 'react'

export const Logo = ( {freeCodeCampLogo} ) => {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo de freecodecamp' />
    </div>
  )
}