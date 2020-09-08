import React from 'react';
import 'normalize.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import News from './components/news/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="content">
          <Route exact path='/profile' render={() => <Profile state={props.state.stateProfile.posts} />} />
          <Route path='/messages' render={ () => <Messages  state={props.state.stateMessages} /> } />
          <Route path='/news' render={(News)} />
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;