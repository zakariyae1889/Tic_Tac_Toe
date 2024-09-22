"use client"
import { useEffect, useState } from "react";
import Cell from "./components/cell";


const winnigCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6],

]
export default function Home() {
 const [cells,setCells]=useState(["","","","","","","","",""])
 const [go,setGo]=useState("circle")
 const [winnigMassage,setWinnigMassage]=useState("")
 useEffect(()=>{
    winnigCombos.forEach((combo)=>{

      const circleWins=combo.every((cell)=>cells[cell] === "circle")
      const crossWins=combo.every((cell)=>cells[cell] === "cross")

      if (circleWins){
        setWinnigMassage("CircleWin")

      }else if (crossWins){
        setWinnigMassage("CrossWin")
 
      }
    })
 },[cells])
 useEffect(()=>{
    if(cells.every((cell) => cell !=="") &&  !winnigMassage){
      setWinnigMassage("Draw")
    }
 },[cells,winnigMassage])
  return (
    
      <main className="container">
       
        <div className="gameborad">
              {cells.map((cell,index)=>(
                <Cell 
                
                id={index} 
                go={go} 
                setGo={setGo} 
                key={index}
                cells={cells}
                setCells={setCells}
                cell={cell}
                winnigMassage={winnigMassage}
                 
                 />
              ))}
        </div>
        <div>{winnigMassage}</div>
        <div>{`its now ${go} trun!`}</div>
        
      </main>
    
  );
}
