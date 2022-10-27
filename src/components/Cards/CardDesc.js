import React from 'react'

export default function CardDesc(props) {
  return (
    <div className='card-text'>
        {props.props.description}
    </div>
  )
}
