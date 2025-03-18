import '../../App.css';
import React from 'react';
import NavButton from './navbutton.js';
import HomeButton from './homebutton.js';
import {useState} from 'react';

export default function Navbar(){
    const [activeTab, setActiveTab] = new useState('HOME');

    return (
        <header className="navbar">
            <HomeButton to='/' label='JOSEPH HEATH' onClick={() => {
                window.scrollTo(0, 0);
                setActiveTab('HOME')}}/>
            <div className='navbuttons-container' id='navbar'>
                <NavButton to='/books' label='BOOKS' onClick={() => {
                    window.scrollTo(0, 0);
                    setActiveTab('BOOKS')}} style={activeTab === 'BOOKS' ? { opacity: '0.7', textDecoration: 'none' } : {textDecoration: 'none'}}/>
                <NavButton to='/articles' label='ARTICLES' onClick={() => {
                    window.scrollTo(0, 0);
                    setActiveTab('ARTICLES')}} style={activeTab === 'ARTICLES' ? { opacity: '0.7', textDecoration: 'none' } : {textDecoration: 'none'}}/>
                {/* <NavButton to='/teaching' label='TEACHING' onClick={() => {
                    window.scrollTo(0, 0);
                    setActiveTab('TEACHING')}} style={activeTab === 'TEACHING' ? { opacity: '0.7', textDecoration: 'none' } : {textDecoration: 'none'}}/>  NOT DONE YET*/}
                <NavButton to='/commentary' label='COMMENTARY' onClick={() => {
                    window.scrollTo(0, 0);
                    setActiveTab('COMMENTARY')}} style={activeTab === 'COMMENTARY' ? { opacity: '0.7', textDecoration: 'none' } : {textDecoration: 'none'}}/>
                <NavButton to='/contact' label='CONTACT' onClick={() => {
                    window.scrollTo(0, 0);
                    setActiveTab('CONTACT')}} style={activeTab === 'CONTACT' ? { opacity: '0.7', textDecoration: 'none' } : {textDecoration: 'none'}}/>
            </div>
        </header>
    );
}