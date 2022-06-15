import React from 'react';

import { Footer, Blog, Possibility, Features, HighfiveEducation, Header } from './containers';
import { CTA, Brand, Navbar, Feature } from './components';

import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <HighfiveEducation />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App