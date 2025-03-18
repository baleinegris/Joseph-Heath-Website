import '../../App.css';
import React from 'react';
import NavButton from './navbutton';

export default function Footer(){
    return (
        <footer className="footer">
            <NavButton to='/contact' label='Contact' onClick={() => console.log('Books')} id='contact-footer'/>
            <NavButton to='https://scholar.google.ca/citations?user=xZmh0TIAAAAJ&hl=en' label='Google Scholar' onClick={() => console.log('Books')} id='scholar'/>
            <div className='footer-signature'>Created by Oscar Heath</div>
        </footer>
    );
}