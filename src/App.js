import React from 'react';
import s from './App.module.css';

const App = () => {
    return (
        <div className={s.container}>
            <input type="text" name="" className={s.inputTxt} placeholder="Enter domain...."/>
            <div className={s.inputBtn}></div>
        </div>
    )
}


export default App;
