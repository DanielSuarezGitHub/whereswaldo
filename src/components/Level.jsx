import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStopwatch } from 'react-timer-hook'
import { OdlawIcon, WaldoIcon, WizardIcon } from '../characterIcons'
import { getLevelInfoById } from '../firebase/databaseFunctions'
import { waldoMaps } from '../mapAssets'
import Characters from './Characters'
import Navbar from './Navbar'
import Submitmodal from './Submitmodal'
export default function Level() {
  const level = useParams()
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  function handleClick(e) {
    let rect = e.target.getBoundingClientRect();
    let x = Math.ceil((e.clientX - rect.left) / (e.target.width / 100));
    let y = Math.ceil((e.clientY - rect.top) / (e.target.height / 100));
    coordinates.forEach((coord) => {
      if (checkDeviation(coord.X, x, 2) && checkDeviation(coord.Y, y, 2)) {
        if(!foundCharacters.includes(coord.Name)) {
          addFoundCharacter(foundCharacters.concat(coord.Name))
          if (foundCharacters.length == characters.length) {
          }
        }
      }
    })
  }

  function checkDeviation(number1, number2, deviation) {
    if (Math.abs(number1 - number2) <= deviation) {
      return true;
    } else {
      return false;
    }
  }
  const [characters, setCharacters] = useState([])
  const [foundCharacters, addFoundCharacter] = useState([])
  const [coordinates, setCoordinates] = useState([])
  const [isShowing, showModal] = useState(false)
  const [levelName, setLevelName] = useState()

  useEffect(() => {
    const getLevelData = async () => {
      const levelInfo = await getLevelInfoById(Number(level.id))
      setLevelName(levelInfo.levelName)
      setCharacters(Object.values(levelInfo.Characters))
      setCoordinates(Object.values(levelInfo.Coordinates))
    }

    getLevelData()
  }, [])

    useEffect(() => {
      if(foundCharacters.length == characters.length && foundCharacters.length != 0) {
        pause()
        showModal(true)
      }
    }, [foundCharacters])
  return (
    <>
      <Navbar/>
      <Submitmodal level={levelName} close={() => {showModal(false)}} showing={isShowing} time={{hours: hours, minutes: minutes, seconds: seconds} }/>
      <div className="levelContainer">
        <div className="time">{`${hours ? hours + ':' : '' }${minutes ? minutes : `00`}:${seconds}`}</div>
        <Characters characters={characters} foundCharacters={foundCharacters}/>
        <img onClick={handleClick} className='levelImage' src={waldoMaps[level.id]} alt="" />
        </div>
    </>
  )
}
