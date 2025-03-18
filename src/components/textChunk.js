import '../App.css';
import React from 'react';
import parse from 'html-react-parser';


export default function TextChunk({id, className, html}){
    console.log(html);
    return (
        <div id={id} className={className}>
            {parse(html)}
        </div>
    );
}