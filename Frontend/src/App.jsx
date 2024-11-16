import React from 'react';
import Home from './home/Home';
import {Route, Routes} from 'react-router-dom';
import Genres from './Genres/Genres';
import Signup from './components/Signup';
import Abouts from './aboutAuthors/Abouts';
import Authorss from './detail/Authorss';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/UnlockMore" element={<Genres/>}/>
      <Route path="/aboutAuthors" element={<Abouts/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/authors" element={<Authorss/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App;