import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImage from '../images/Local.svg';

function Landing(){
    return (

    <div id="page-landing">
        <div className="content-wrapper">

            <img src={logoImage} alt="Logo HAPPY" />
    
            <main>
                <h1>Leve felicidade para o mundo!</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>
    
            <div className="location">
                <strong>Florianópolis</strong>
                <span>Santa Catarina</span>
            </div>
    
    
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
    
        </div>
    </div>
    );
}

export default Landing;