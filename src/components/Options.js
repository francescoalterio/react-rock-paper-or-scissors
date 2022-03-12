import React from 'react'
import Option from './Option'
import './styles/Options.css'

const Options = ({gameState, setGameState}) => {
  return <div className='box-options'>
    <Option value='Piedra' gameState={gameState} setGameState={setGameState} />
    <Option value='Papel' gameState={gameState} setGameState={setGameState} />
    <Option value='Tijera' gameState={gameState} setGameState={setGameState} />
  </div>
}

export default Options