import React from 'react';
import "./Header.css"
const Header=function (properties) {
    return(
        <div className="header">
            {properties.heading}
        </div>
    )
}
export default Header;
