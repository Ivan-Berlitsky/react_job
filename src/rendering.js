import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rendering = (state) => ReactDOM.render(<App state={state}/>, document.getElementById('root'));


export default rendering;