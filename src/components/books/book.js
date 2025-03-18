import '../../App.css';
import React from 'react';

export default function Book({title, cover, text}){
    return(
        <div className='book-container'>
            <img src={cover} alt={title} className='book-cover'/>
            <div className='book-text'>
                <div className='book-title'>{title}</div>
                <div className='book-blurb'>{text}</div>
            </div>
        </div>
    )
}