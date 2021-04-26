import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="wrapper-spinner">
            <div className="spinner">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="8" cy="8" r="7" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default Spinner;
