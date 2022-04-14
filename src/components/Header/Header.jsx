import React from 'react';
import "./Header.sass"
import {AiFillGithub, AiOutlineSearch} from "react-icons/ai";
import Input from "../../ui/input/Input";

const Header = () => {
    return (
        <div className="header">

            <div className="header_logo">
                <a href="https://github.com/nrylord"><AiFillGithub style={{"fontSize": 40}}/></a>
                <Input placeholder="Search"
                       variant="search"
                       icon={<AiOutlineSearch/>}
                />
            </div>

            <div className="header_about">
                <a href="">About</a>
            </div>
        </div>
    );
};

export default Header;