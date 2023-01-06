import React, { useEffect, useState } from 'react'
import { getTopScores } from '../firebase/databaseFunctions';
import Level from './Level';
export default function LeaderBoardCard({ level }) {
    const [scores, setScores] = useState([])
    useEffect(() => {
        const getLevelData = async () => {
          let myArr = await getTopScores(level);
          myArr.sort((a, b) => {
            if (a.time < b.time) {
              return -1;
            }
            if (a.time > b.time) {
              return 1;
            }
            return 0;
          });
          setScores(myArr.slice(0, 5))
        };
    
    
        getLevelData()
      }, []);
  return (
    <>
    <table className='styled-table'>
        <caption><h2>{`${level}: Top 5`}</h2></caption>
        <thead>
            <tr>
                <th><h3>Name</h3></th>
                <th><h3>Time</h3></th>
            </tr>
        </thead>
        <tbody>
            {scores.map((score, indx) => {
                return(
                        <tr key={indx}>
                            <td>{score.name}</td>
                            <td>{score.time}</td>
                        </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}
