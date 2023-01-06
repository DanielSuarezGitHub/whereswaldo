import React from 'react'
import { waldoMaps } from '../mapAssets'
import Maps from './Maps'


export default function Levelselection({ levels }) {
  return (
    <div className="levelSelection">
      {Object.values(levels).map((level, indx) => {
        return(
            <Maps key={indx} map={waldoMaps[indx]} name={level.levelName} id={level.levelid}/>
          )
        })}
    </div>
  )
}
