import state from './data/state';
import * as serviceWorker from './serviceWorker';
import rendering from './rendering';

rendering(state);
serviceWorker.unregister();
