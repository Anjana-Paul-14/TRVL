import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function heroSection() {
  return (
    <div className='hero-container'>
        <h1>Adventure awaits</h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get strated
            </Button>
        </div>

    </div>
  )
}

export default heroSection
