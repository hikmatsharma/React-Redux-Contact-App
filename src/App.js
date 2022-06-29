import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import {ToastContainer } from 'react-toastify'
import Home from './components/Home'
import EditContacts from './components/Edit'
import NewContact from './components/NewContact';


function App() {
 
  return (
    <>
   
    <ToastContainer />
      <Navbar />

      <Routes>
      <Route exact path = "/" element= {<Home />} />
      <Route path= "add" element={ <NewContact /> } />
      <Route path="edit/:id" element={ <EditContacts/> } />
      </Routes>
    
    </>
  );
}

export default App;
