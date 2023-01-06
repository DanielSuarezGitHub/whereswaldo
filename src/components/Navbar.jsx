import React from 'react'
import { Link } from 'react-router-dom'
import waldo from '../assets/waldo.png'

export default function Navbar() {
  return (
    <>
    <nav>
        <ul>
        <li>
            <Link to='/'><img src={waldo} alt="" /></Link>
        </li>
        <li>
            <Link to='/'><h1>Wheres Waldo</h1></Link>
        </li>
        <li>
            <Link to='/leaderboards'>Leader Boards</Link>
        </li>
        </ul>
    </nav>
    </>
  )
}
