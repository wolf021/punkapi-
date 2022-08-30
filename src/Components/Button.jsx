import React from 'react'
import '../Css/button.css'

const Button = ({Title,onClick}) => {
  return (
    <button  className='primary_button' onClick={onClick}>
        {Title}
    </button>
  )
}

export default Button