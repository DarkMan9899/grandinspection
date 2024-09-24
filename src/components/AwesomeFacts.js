import React from 'react';
import '../Style/AwesomeFacts.css';

const AwesomeFacts = () => {
    return (
        <div className="awesome-facts">
            <div className="background-image ">
                <div className="overlay container">
                    <h2>The Construction Company</h2>
                    <h1>AWESOME FACTS</h1>
                    <div className="facts">
                        <div className="fact">
                            <span className="number">13691+</span>
                            <span className="description">PROJECT COMPLETED</span>
                        </div>
                        <div className="fact">
                            <span className="number">1725+</span>
                            <span className="description">SATISFIED CLIENTS</span>
                        </div>
                        <div className="fact">
                            <span className="number">984+</span>
                            <span className="description">WORKERS EMPLOYED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwesomeFacts;
