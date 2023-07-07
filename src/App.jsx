import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/*import*/
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
    return (
        <div className="overflow-hidden bg">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/product/:id" element={<ProductDetails/>}></Route>
                </Routes>
                <Sidebar/>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;