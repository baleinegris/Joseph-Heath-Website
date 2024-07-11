import '../App.css';
import React from 'react';
import NavButton from './navbutton.js';
import HomeButton from './homebutton.js';

export default function Navbar(){
    return (
        <header className="navbar">
            <HomeButton label='Joseph Heath' onClick={() => console.log('Joseph Heath')}/>
            <div className='navbuttons-container'>
                <NavButton label='Books' onClick={() => console.log('Books')}/>
                <NavButton label='Articles' onClick={() => console.log('Articles')}/>
                <NavButton label='Teaching' onClick={() => console.log('Teaching')}/>
                <NavButton label='Commentary' onClick={() => console.log('Commentary')}/>
                <NavButton label='Contact' onClick={() => console.log('Contact')}/>
            </div>
        </header>
    );
}