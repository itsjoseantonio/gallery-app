import React from 'react';
import './Menu.css';

const list = [
    'Interior Design',
    'Landscape',
    'Nature',
    'People',
    'Technology',
    'Architecture',
    'Wallpapers',
];

const Menu = ({ open, onHandleClick }) => {
    const renderedList = list.map((item, index) => {
        return (
            <li key={index}>
                <a href="" onClick={onHandleClick}>
                    {item}
                </a>
            </li>
        );
    });
    return (
        <div className={`menu ${open ? 'isopen' : ''}`}>
            <ul>{renderedList}</ul>
        </div>
    );
};

export default Menu;
