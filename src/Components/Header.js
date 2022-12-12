import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const style = {
        textDecoration: "none",
        marginRight: "16px",
        marginTop: "10px"
    }

    return (
        <nav>
           <Link style={style} to="/">Home</Link> 
           <Link style={style} to="/add">Add Products</Link>
        </nav>
    );
};

export default Header;