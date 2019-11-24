import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <h1>LOGO</h1>
            <a href="#"> Главная</a>
            <a href="#"> Услуги</a>
            <a href="#"> Контакты</a>
        </div>
    );
};

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
            </ul>
        </div>
    );
};


export default App;
