import '../App.css';
import React from 'react';


export default function NavButton({label, onClick}){
    return (
        <button className="navbutton" onClick={onClick}>{label}</button>
    );
}