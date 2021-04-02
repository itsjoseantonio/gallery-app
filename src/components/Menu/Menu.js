import React, { useState } from 'react';
import './Menu.css';

const list = [
    'Landscape',
    'Nature',
    'People',
    'Technology',
    'Architecture',
    'Wallpapers',
];

const Menu = (props) => {
    const renderedList = list.map((item, index) => {
        return (
            <li key={index}>
                <a href="#">{item}</a>
            </li>
        );
    });
    return (
        <div className={`menu ${props.open ? 'isopen' : ''}`}>
            <ul>{renderedList}</ul>
        </div>
    );
};

export default Menu;
