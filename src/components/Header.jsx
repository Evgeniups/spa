import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header h-16 flex bg-center bg-sky-900 text-white items-center justify-center space-x-4 '>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
      <NavLink to='/people'>People</NavLink>
      <NavLink to='/framer'>Framer</NavLink>
    </header>
  );
};

export default Header;
