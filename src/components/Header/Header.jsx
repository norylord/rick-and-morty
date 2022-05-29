import React from 'react';
import "./Header.sass"
import {AiFillGithub, AiOutlineSearch} from "react-icons/ai";
import Input from "../../ui/input/Input";

const Header = () => {
    return (
        <div className="header">
            <a href="https://github.com/nrylord"><AiFillGithub style={{"fontSize": 40}}/></a>
            <a href="">About</a>
        </div>
    );
};

export default Header;