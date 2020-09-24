import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './data/store';

    let render = (store) =>{
    ReactDOM.render(<App state={store}/>, document.getElementById('root'));
}
render(store);

store.subscribe(render);

serviceWorker.unregister();
