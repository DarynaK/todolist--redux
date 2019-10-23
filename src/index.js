// import { createStore } from 'redux';
// import "./index"
//
// function playlist(state=[], action) {
//     if(action.type === 'ADD_TRACK') {
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state;
// }
//
// const store = createStore(playlist);
//
// store.subscribe(() => {
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// })
//
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const list = document.querySelectorAll('.list')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
//
// addTrackBtn.addEventListener('click', () => {
//     const trackName = document.querySelectorAll('.trackInput')[0].value;
//     store.dispatch({type: 'ADD_TRACK', payload: trackName});
// })






import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





