import React, { useState } from 'react'
import "./App.css"
import ChooseBoardSize from './components/ChooseBoardSize'
import FourByFour from './components/FourByFour'
import SIxBySix from './components/SIxBySix'
import EightByEight from './components/EightByEight'

const App = () => {
  const [chooseBoardSize,setChooseBoardSize]=useState(false)
  const [boardSize,setBoardSize]=useState(null)
  const [isBoardchoosen,setIsBoardChoosen]=useState(false)

  const handleGame=()=>{
    setChooseBoardSize(true)


  }
  const handleBoardSize=(size)=>{
    setBoardSize(size)

  }
  let boardComponent;
  switch (boardSize){
    case '4x4':
    boardComponent=<FourByFour/>;
    break;

    case '6x6':
      boardComponent=<SIxBySix/>;
      break;
    case '9x9':
      boardComponent=<EightByEight/>;
      break;
    default:
      boardComponent=null

  }
  return (
    <div className='d-flex flex-column  justify-content-center align-items-center'>
     <div>
     <h3 className='title'>Memory Game</h3>
     </div>
     <div>
    <button className='btn btn-primary button-start' onClick={handleGame}>Start Game</button>
    </div>
    {chooseBoardSize && !boardSize && ( <ChooseBoardSize chooseBoardSize={handleBoardSize} />
    )}
    {boardComponent}
    </div>
  )
}

export default App