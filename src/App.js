import React from 'react';
import 'normalize.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import News from './components/news/News';
import dataMessages from './data/DataMessages';
import dataFriends from './data/DataFriends';
import dataPosts from './data/DataPosts'


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="content">
          <Route exact path='/profile' render={() => <Profile dataPosts={dataPosts} />} />
          <Route path='/messages' render={ () => <Messages dataFriends={dataFriends} dataMessages={dataMessages} /> } />
          <Route path='/news' render={(News)} />
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;