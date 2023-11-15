import {Routes, Route} from 'react-router-dom';
import About from '../components/About';
import Contacts from '../components/Contacts';
import People from '../components/People';
import Home from '../components/Home';

export const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contacts' element={<Contacts />} />
    <Route path='/people' element={<People />} />
  </Routes>
);
