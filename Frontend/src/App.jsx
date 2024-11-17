import React from 'react';
import Home from './home/Home';
import {Navigate, Route, Routes} from 'react-router-dom';
import Genres from './Genres/Genres';
import Signup from './components/Signup';
import Abouts from './aboutAuthors/Abouts';
import Authorss from './detail/Authorss';
import Contact from './components/Contact';
import { Toaster } from "react-hot-toast";
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
    
  return (
    <>
      <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/UnlockMore" element={authUser?<Genres/>:<Navigate to="/signup"/>}/>
      <Route path="/aboutAuthors" element={<Abouts/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/authors" element={<Authorss/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App;