import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';




const Logo = () => { //pure function
    return (
        <div className='ma4 mt0' style={{ height: 220 ,width:120}}>
            <Tilt className='Tilt  br2 shadow-2' options={{max:50}}  >
                <div className='Tilt-inner ' >
                    <img alt='logo' src={brain} style={{height:  '100%' , width:'100%'}}></img>
                </div>
            </Tilt>

        </div>
    );
}







export default Logo;