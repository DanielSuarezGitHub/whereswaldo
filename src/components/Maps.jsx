import React from 'react'
import { Link } from 'react-router-dom'

export default function Maps({ map, name, id }) {
  return (
    <Link to={`level/${id}`} className='level'>
        <h2>{name}</h2>
        <img src={map} alt="" />
    </Link>
  )
}
