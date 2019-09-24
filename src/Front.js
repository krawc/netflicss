import React, { Component } from 'react';
import front from './images/front.jpg';
import IosPlay from 'react-ionicons/lib/IosPlay'

const Front = (props) => {
    return ( 
        <div className="Front" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(' + front + ') center / cover'}}>
            <h2 className="title">Pose</h2>
            <p className="description">In 1987 New York, LGBTQ ball fixture Blanca starts her own house, soon becoming mother to a gifted dancer and a sex worker in love with a yuppie client.</p>
            <div className="action-buttons">
                <button>
                    <IosPlay fontSize="20px" color="#fff"/> Play</button>
                <button>My List</button>
                <button>More Info</button>
            </div>
        </div>
     );
}
 
export default Front;