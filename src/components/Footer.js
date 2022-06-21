import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css';


export const Footer = () => {
    let year = new Date().getFullYear() - 1;
    const logoStyle = {
        width: '300px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,.5)',
        boxShadow: '5px 5px'
    };

    return (
        <footer className='bg-dark mt-3 p-3 text-center'>
            <p style={logoStyle}><Image src={'/sspul.jpg'} /></p>
            <p className='copyright'>&copy; {year} - Ročníkový projekt - autor: <b>Samuel Vaňuš</b> - </p>
        </footer>
    );
}