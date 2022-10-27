import React from 'react'

export default function CardAuthor(props) {
    return (
        <div className='card-text text-muted'>
            {props.props.author ? props.props.author : "Anonymous"}
        </div>
    )
}
