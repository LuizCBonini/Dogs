import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo/Photo';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
import UserProfile from './Pages/User/UserProfile/UserProfile';

import {UserStorage} from './UserContext'

const App = () => {

  return <div className='App'>
    <BrowserRouter>
      <UserStorage>
        <Header/>
        <main className='AppBody'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='login/*' element={<Login/>}/>
            <Route path='conta/*' element={<ProtectedRoute><User/></ProtectedRoute>}/>
            <Route path='photo/:id' element={<Photo/>}/>
            <Route path='perfil/:user' element={<UserProfile/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
