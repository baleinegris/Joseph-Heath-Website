import '../App.css';
import React from 'react';
import TextChunk from './textChunk';
export default function Blurb(props){
    return(
        <div className='blurb'>
        <div className='blurb-container' id={props.id}>
            <div className = 'blurb-text-container' id={props['text-id']}>
                {props.title && <div className='blurb-title'> {props.title} </div>}
                {props['in-box'] && <TextChunk className='blurb-text' html={props['text-html']}/>}
            </div>
        </div>
        {props.below && <TextChunk className='blurb-text fade-in' html={props['text-html']}/>}
        </div>
    )
}