import React from 'react';
import cn from 'classnames';
import Header from "./components/Header";
import Footer from "./components/Footer";
import s from './App.module.scss';

const App = () => {

    return (
        <>
            <Header/>
            <div className={cn(s.header, 'color')}>This is App Component!</div>
            <Footer/>
        </>
    )

};

export default App;
