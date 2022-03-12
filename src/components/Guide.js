import React from 'react'
import './styles/Guide.css'

const Guide = ({guide}) => {
  return <div className='box-guide'>
    <span>{guide}</span>
  </div>
}

export default Guide