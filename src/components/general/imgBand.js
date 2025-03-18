import React from 'react';

export default function ImgBand({id, src, title, text}){
    return(
        <div id={id} className='imgBand' style={{backgroundImage: `url(${src})`, backgroundAttachment:'fixed'}}>
            {(title || text) && 
                <div className='imgBand-text-container'> 
                    {title && <div className='imgBand-title'>{title}</div>}
                    {text && <div className='imgBand-text'>{text}</div>}
                </div>
            }
        </div>
    )
}