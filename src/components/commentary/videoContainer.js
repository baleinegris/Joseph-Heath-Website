import React from 'react';
import Video from './video';

export default function VideoContainer({src, title}){
    const containerStyle = {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        width: '320px',
        height: '320px',
        margin: '1%',
        backgroundColor: 'rgb(0,0,0,0.5)',
        padding: '1%',
        borderRadius: '2vw',
        boxShadow: '10px 10px 10px rgb(0, 0, 0, 0.7)',
    }
    return (
        <div className='video-container' style={containerStyle}>
            <strong className='video-title' style={{textAlign: 'center', width: '320px', height: 'auto'}}>{title}</strong>
            <Video src={src} title={title}/>
        </div>
    )
}