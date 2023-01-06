import React from 'react'
import Levelselection from './Levelselection'
import Maps from './Maps'
import Navbar from './Navbar'

export default function Home({ levels }) {
  return (
    <div className='home'>
    <Navbar/>
    <Levelselection levels={levels}/>
    </div>
  )
}
