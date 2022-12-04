import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';

import {UserStorage} from './UserContext'

const App = () => {
  return <div>
    <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login/*' element={<Login/>}/>
          <Route path='conta/*' element={<ProtectedRoute><User/></ProtectedRoute>}/>
        </Routes>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
