import '../App.css';
import React from 'react';


export default function HomeButton({label, onClick}){
    return (
        <button className="homebutton" onClick={onClick}>{label}</button>
    );
}