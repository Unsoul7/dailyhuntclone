import React from 'react'

export default function Card(props){
  return (
    <div className='card'>
        <div className='img'>
            <img src={props.img} alt="img" />
        </div>
        <div className='content'>
            <h1>{props.title}</h1>
            <h4>{props.desc}</h4>
        </div>
        <a href={props.url}>Read More</a>
    </div>
  )
}
