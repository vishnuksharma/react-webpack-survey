import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import img from '../../assets/images/react_logo_512x512.png';

export default class Header extends React.Component {
//   constructor(props){
//     super(props);
//   }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <NavLink to="/home">
              <img className="image" src={img} alt="React Logo" />
            </NavLink>
          </li>
          <li className="links"><NavLink to="/survey">Survey</NavLink></li>
        </ul>
      </nav>
    );
  }
}
