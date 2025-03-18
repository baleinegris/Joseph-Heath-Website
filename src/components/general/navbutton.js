import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default function NavButton({label, onClick, id, to, style}){
    return (
        <Link to={to} style={style} className="navbutton" {...!(id)? id={id} : id=''} onClick={onClick}>{label}</Link>
    );
}