import React, { Component, useState } from 'react';
import IosPlay from 'react-ionicons/lib/IosPlay';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';

import thumb1 from './images/thumb1.jpg';
import thumb2 from './images/thumb2.jpg';
import thumb3 from './images/thumb3.jpg';
import thumb4 from './images/thumb4.jpg';
import thumb5 from './images/thumb5.jpg';
import thumb6 from './images/thumb6.jpg';

const shows = [
    {
        title: "Queer Eye",
        thumb: thumb1
    },
    {
        title: "Tall Girl",
        thumb: thumb2
    },
    {
        title: "The Mind: Explained",
        thumb: thumb3
    },
    {
        title: "Derby Girls",
        thumb: thumb4
    },
    {
        title: "Between Two Ferns",
        thumb: thumb5
    },
    {
        title: "Unbelievable",
        thumb: thumb6
    },
    {
        title: "Queer Eye",
        thumb: thumb2
    },
    {
        title: "Tall Girl",
        thumb: thumb1
    },
    {
        title: "The Mind: Explained",
        thumb: thumb4
    },
    {
        title: "Derby Girls",
        thumb: thumb6
    },
    {
        title: "Between Two Ferns",
        thumb: thumb3
    },
    {
        title: "Unbelievable",
        thumb: thumb5
    }
]

const Slider = () => {

    let [page, setPage] = useState(0);

    const perPage = 6;

    const pageCount = Math.ceil(shows.length / perPage);

    const nextPage = (pageCount > (page + 1)) ? (page + 1) : 0;

    const prevPage = (page > 0) ? (page - 1) : 0;


    const slideForward = () => {
        setPage(nextPage);
        console.log(nextPage);
    }

    const slideBack = () => {
        setPage(prevPage);
        console.log(prevPage);
    }

    let slides = shows.map((show) => {
        return (
            <div className="slide" style={{background: 'url(' + show.thumb + ') center / cover'}}>
                <div className="overlay"></div>
                <IosPlay fontSize="20px" color="#fff"/>
                <h4>{show.title}</h4>
            </div>
        )
    });
    return ( 
        <div className="Slider">
            <h2 className="title">Popular on Netflix</h2>
            <div style={{opacity: page}} onClick={slideBack} className="back"><IosArrowBack color="#fff" fontSize="36px"/></div>
            <div className="slides-container" style={{transform: "translateX(-" + (page*100) + "%)"}}>
                {slides}
            </div>
            <div style={{opacity: nextPage}} onClick={slideForward} className="forward"><IosArrowForward color="#fff" fontSize="36px"/></div>
        </div>
    );
}
 
export default Slider;