import React from 'react'
import Option from './Option'
import './styles/Options.css'

const Options = ({gameState, setGameState}) => {
  return <div className='box-options'>
    <Option value='Rock' gameState={gameState} setGameState={setGameState} />
    <Option value='Paper' gameState={gameState} setGameState={setGameState} />
    <Option value='Scissors' gameState={gameState} setGameState={setGameState} />
  </div>
}

export default Options