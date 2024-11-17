import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Authors from '../components/Authors';

function Authorss() {

  return (
    <>
        <a href="/authors">
        <Navbar />
        <div className='min-h-screen'><Authors /></div>
        
        
        <Footer />
        </a>
    </>
  );
}

export default Authorss;