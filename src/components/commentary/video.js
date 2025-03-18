import React from 'react';

export default function Video({src, title}){
    return (
        <div className='video'>
            <iframe src={src} title={title} height='240px' width='320px'></iframe>
        </div>
    )
}