import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam alias quos recusandae aut ut? Repudiandae sunt minus
            quod, ipsa architecto dolorem quis libero maxime ex. Dolorum quia 
            voluptatibus vel pariatur.</p>
            <p>Go to <Link to="/registar">Registar</Link></p>
        </div>
    );
};

export default Terms;