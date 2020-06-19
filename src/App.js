import React from 'react';
import s from './App.module.css';

const App = () => {
    return (
        <div className={s.container}>

            {/*<div className={s.dropdownContent}>
                <p className={s.dropItem + ' ' + s.visible}></p>
                <p className={s.dropItem + ' ' + s.hidden}></p>
                <p className={s.dropItem + ' ' + s.hidden}></p>
            </div>*/}

            <select className={s.dropdownContent}>
                <option className={s.dropItem + ' ' + s.visible}  value="volvo">Volvo</option>
                <option className={s.dropItem + ' ' + s.visible} value="saab">Saab</option>
                <option className={s.dropItem + ' ' + s.visible}  value="mercedes">Mercedes</option>
                <option className={s.dropItem + ' ' + s.visible}  value="audi">Audi</option>
            </select>

            <input type="text" name="" className={s.inputTxt} placeholder="Enter domain...."/>
            <div className={s.inputBtn}></div>
        </div>
    )
}


export default App;
