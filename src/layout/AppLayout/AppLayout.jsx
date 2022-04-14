import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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