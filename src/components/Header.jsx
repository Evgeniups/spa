import React from 'react';

import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header h-16 flex bg-center bg-sky-900 text-white items-center justify-center space-x-4 '>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About2</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
      <NavLink to='/people'>People</NavLink>
    </header>
  );
};

export default Header;
