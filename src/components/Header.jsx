import './Header.css'
import Avatar from './Avatar'
import React from 'react'
import Date from './Date'


const Header = (props)=> {
   return (
    <div className='header'>
        <Avatar author={props.author}/>
        <div>{props.author.name}</div>
        <div className='text'> {props.text}</div>
        <Date date = {props.date}/>

    </div>
   )
}
export default Header;