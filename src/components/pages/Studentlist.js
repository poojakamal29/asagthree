import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './Studentlist.css';
import { Link } from 'react-router-dom';

export default function Studentlist() {
    return (
        <>
            <h1> Which learner's feedback would you like to view? </h1>
            <div className = 'students'>
            <ul className = 'list'>
            <Link to='/studentone'>
            <Button className = 'buttonx' buttonStyle = 'btn--primary' buttonSize= 'btn--large'>
                701 
            </Button>
            </Link>
            
            <Link to='/studenttwo'>
            <Button buttonStyle = 'btn--primary' buttonSize= 'btn--large'>
                702
            </Button>
            </Link>

            <Link to='/studentthree'>
            <Button buttonStyle = 'btn--primary' buttonSize= 'btn--large'>
                703
            </Button>
            </Link>

            <Link to='/studentfour'>
            <Button buttonStyle = 'btn--primary' buttonSize= 'btn--large'>
                704
            </Button>
            </Link>

            <Link to='/studentfive'>
            <Button buttonStyle = 'btn--primary' buttonSize= 'btn--large'>
                705
            </Button>
            </Link>

            <Link to='/facultycardthree'>
            <Button buttonStyle = 'btn--primary' buttonSize= 'btn--large'>
                706
            </Button>
            </Link>            
            </ul>
            </div>

            {/* <section className='footer-subscription'>
            <p className='footer-subscription-text'>
            Search for a student:
            </p>
            <div className='input-areas'>
            <form>
                <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Name or ID'
                />
                <Button buttonStyle='btn--test'>search</Button>
            </form>
            </div>
        </section> */}
        </>
    );
}