import React from 'react';
import 'normalize.css';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Route path='/profile' component={Profile} />
        <Route path='/messages' component={Messages} />
      </div>
    </BrowserRouter>
    );
}

export default App;