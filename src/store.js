import { createStore } from 'redux';
import { reducer } from './reducer';

// enhancer provided by redux dev tools
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
