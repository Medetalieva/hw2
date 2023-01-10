import './Avatar.css'
import React from 'react';


const Avatar = (props) =>{
   return <img className='img' src={props.author.avatarUrl} alt="" />
}
export default Avatar;