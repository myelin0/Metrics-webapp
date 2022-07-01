import React from 'react';
import { Link } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { FaAngleLeft } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return(
<nav>
  <Link to="/" className='link-home'>
    <div className='home'>
      <FaAngleLeft size='2em' />
      <h1>Home</h1>
    </div>
  </Link>
  <p className="middle-text">Countries Info</p>
      <div className="icons">
        <FaMicrophone size="1.5em" />
        <FiSettings size="1.5em" />
      </div>
</nav>
  )
}

export default Header