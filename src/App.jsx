import {useState} from 'react';
// import reactLogo from './assets/react.svg';

import Header from './components/Header';
import {AppRoutes} from './AppRoutes/AppRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app flex flex-col min-h-screen bg-slate-800 text-white'>
      <Header />
      <main className='main flex-grow flex justify-center mt-8 container mx-auto p-5'>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
