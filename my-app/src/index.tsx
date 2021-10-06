import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import {store} from './redux/store'
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";




    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} >
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )




// reportWebVitals();


// const rerenderTreeChange = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store} >
//                 <App/>
//             </Provider>
//         </BrowserRouter>,
//         document.getElementById('root'));
// }
//
//
//
//
// store.subscribe(rerenderTreeChange);
// rerenderTreeChange()