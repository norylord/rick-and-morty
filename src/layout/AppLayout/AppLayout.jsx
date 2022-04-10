import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from "../../ui/header/Header";
import Footer from "../../ui/Footer/Footer";
import "./AppLayout.sass"

const AppLayout = () => {
    return (
        <div className="appLayout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default AppLayout;