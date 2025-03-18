import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default function HomeButton({label, onClick, to}){
    return (
        <Link style={{ textDecoration: 'none' }} to={to} className="homebutton" onClick={onClick}>{label}</Link>
    );
}