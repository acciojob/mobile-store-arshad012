import React from 'react';
import { Link } from 'react-router-dom';

const Navigate = () => {
    const navLinks = [
        {name:'Home', to:'/'},
        {name:'Admin', to:'/admin'},
    ]
    return (
        <nav>
            <ul className='navLinks'>
                {
                    navLinks.map((link) => (
                        <li key={link.to}><Link to={link.to}>{link.name}</Link></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigate;