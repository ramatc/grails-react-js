import React from 'react';
import './Loading.css';

const Loading = () => {
    
    return (
        <>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
            <p className="loading_text">Loading</p>
        </>
    )
}

export default Loading;
