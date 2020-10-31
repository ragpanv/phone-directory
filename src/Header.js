import React from 'react';
import "./Header.css"
const Header=function (properties) {
    return(
        <div className="header">
            {properties.heading}
        </div>
    )
}
// class is used for dynamic
// import React, {Component} from 'react';
// class Header extends Component{
//     render(){
//         return(
//             <div>
//                 {this.properties.heading}
//             </div>
//         )
//     }
// }

export default Header;