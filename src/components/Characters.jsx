import React from 'react'
import { OdlawIcon, WaldoIcon, WizardIcon } from '../characterIcons'

export default function Characters({characters, foundCharacters}) {
  return (
    <>
        <div className="characters">
            {characters.includes('Waldo') && <img style={foundCharacters.includes('Waldo') ? {opacity: '60%'} : {opacity: '100%'}} src={WaldoIcon} alt="" />}
            {characters.includes('Wizard') && <img style={foundCharacters.includes('Wizard') ? {opacity: '60%'} : {opacity: '100%'}} src={WizardIcon} alt="" />}
            {characters.includes('Odlaw') && <img style={foundCharacters.includes('Odlaw') ? {opacity: '60%'} : {opacity: '100%'}} src={OdlawIcon} alt="" />}
        </div>
    </>
  )
}
