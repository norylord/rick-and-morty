import React from 'react';
import './Episode.sass'
import Button from "../../../ui/Button/Button";

const Episode = ({name, airDate, created}) => {
    return (
        <div className='episode'>
            <div className="episode__info">
                <div>
                    <h1>{name}</h1>
                    <h3>Air date: {airDate}</h3>
                    <h3>Created at: {created}</h3>
                </div>
                <div>
                    <Button children="Details" type="outlined"/>
                </div>
            </div>
        </div>
    );
};

export default Episode;