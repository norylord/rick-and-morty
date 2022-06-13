import React from 'react';
import './PageSwitchers.sass'
import Button from "../../ui/Button/Button";

const PageSwitchers = ({switchPage, page}) => {
    return (
        <div className='pageSwitchers'>
            <Button children='<<' type='outlined' onClick={() => switchPage('begin')}/>
            <Button children='<' onClick={() => switchPage('previous')}/>
            <h1>{page}</h1>
            <Button children='>' onClick={() => switchPage('next')}/>
            <Button children='>>' type='outlined' onClick={() => switchPage('end')}/>
        </div>
    );
};

export default PageSwitchers;