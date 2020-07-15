import React from 'react';
import s from './App.module.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import SearchInputBar from "./components/SearchInputBar/SearchInputBar";

const App = (props) => {
    return (
        <div className={s.container}>
            <BrowserRouter>
                <Provider store={store}>
                    <SearchInputBar/>
                </Provider>
            </BrowserRouter>
        </div>
    )
}


export default App;
