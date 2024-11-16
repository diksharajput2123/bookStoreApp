import React from 'react'
import Navbar from '../components/Navbar';
import Genre from '../components/Genre';
import Footer from '../components/Footer';

function Genres() {

  return (
    <>
        <Navbar />
        <div className='min-h-screen'><Genre /></div>
        <Footer />
    </>
  );
}

export default Genres;