import React from 'react';
import "./Header.sass"
import {AiFillGithub} from "react-icons/ai";

const Header = () => {
    return (
        <div className="header">
            <a href="https://github.com/nrylord"><AiFillGithub style={{"fontSize": 40}}/></a>
            <a href="">About</a>
        </div>
    );
};

export default Header;