import React from 'react'
import { Link } from 'react-router-dom'
import { sendScore } from '../firebase/databaseFunctions'

export default function Submitmodal({showing, time, close, level}) {
    let totalSeconds = time.seconds + time.minutes * 60 + time.hours * 3600
    function handleSubmit(e) {
        e.preventDefault()
        sendScore(e.target.name.value, totalSeconds, level)
        close()
    }
    if (showing) {
        return (
            <div className='Submitmodal'>
                <h3>Submit Your Time</h3>
                <div className="time">{`${time.hours ? time.hours + ':' : '' }${time.minutes ? time.minutes : `00`}:${time.seconds}`}</div>
                <form onSubmit={handleSubmit} action="">
                    <input name='name' type="text" placeholder='Submit Name' />
                    <div className="buttons">
                        <Link to='/'>
                        <button type='button'>Home</button>
                        </Link>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
          )
    }
}
