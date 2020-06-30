import React from 'react';
import s from './App.module.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.container}>

                    {/*<div className={s.dropdownContent}>
                    <p className={s.dropItem + ' ' + s.visible}></p>
                    <p className={s.dropItem + ' ' + s.hidden}></p>
                    <p className={s.dropItem + ' ' + s.hidden}></p>
                    </div>*/}

                    <div className={s.dropdown}>
                        <button onClick="myFunction()" className={s.dropBtn}></button>
                        <div id="myDropdown" className={s.dropdownContent}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <input type="text" name="" className={s.inputTxt} placeholder="Enter domain...."/>
                    <button className={s.inputBtn}></button>
                </div>
            </Provider>
        </BrowserRouter>
    )
}


export default App;
