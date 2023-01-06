import React, { useEffect } from "react";
import { getTopScores } from "../firebase/databaseFunctions";
import LeaderBoardCard from "./LeaderBoardCard";
import Navbar from "./Navbar";


export default function LeaderBoard() {
 
  return (
    <>
    <Navbar/>
    <div className="scores">
      <LeaderBoardCard level='Beach'/>
      <LeaderBoardCard level='Space'/>
      <LeaderBoardCard level='Track'/>
    </div>
    </>
  ) 
}
