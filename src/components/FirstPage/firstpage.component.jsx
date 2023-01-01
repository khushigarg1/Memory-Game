
import React from "react";
import { Fragment } from 'react';
import { useState } from 'react';
import './firstpage.styles.scss';


import RadioButton from '../RadioButton/radiobutton';
import Counter from '../counter/counter';
import { Link } from "react-router-dom";
// const BASE_URL = "https://api.pexels.com/v1/search?query=nature&orientation=sqaure";


const CATEGORIES = ['nature', 'people', 'animals', 'abstract'];
const PACE = ['easy', 'moderate', 'hard', 'pro'];
const INITIAL_COUNT_CARDS = 8;


const FirstPage = ({ startGame }) => {
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [pace, setPace] = useState(PACE[0]);
    const [count, setCount] = useState(INITIAL_COUNT_CARDS);
    
    const StartGame = () => {
        startGame([category, pace, count]);
    }

    return (
        <>
            <h1>Memory Game</h1>
            <div className='frosted'>
                <h2>Settings</h2>
                <h2>Categories: </h2>
                <div>
                    {CATEGORIES.map(item => (
                        <RadioButton
                            key={item}
                            name={item}
                            selectedItem={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                    ))}
                </div>

                <h2>Pace: </h2>
                <div >
                    {PACE.map(item => (
                        <RadioButton
                            key={item}
                            name={item}
                            selectedItem={pace}
                            onChange={e => setPace(e.target.value)}
                        />
                    ))}
                </div>
                <h2>Amount of Cards: </h2>

                <div>
                    <Counter count={count} onClick={setCount} pace={pace} />
                </div>

                <button >
                    <Link to="/secondpage" onClick={StartGame} >Start</Link>
                </button>
            </div>
        </>
    );


}

export default FirstPage;
//     const buildUrl = () => {
    //         let url = new URL("https://api.pexels.com/v1/search");
    //         url.search = new URLSearchParams({
    //             query: 'nature',   //will cahnega ccording to user
    //             orientation: 'square',
    //             size: 'small',
    //             per_page: 2,    //variable
    //         });
    //         return url
    //     }
    //     fetch(buildUrl(), {
    //         headers: {
    //             Authorization: "",
    //             // Authorization: `Bearer process.env.REACT_APP_AUTH_KEY`,
    //             'Content-Type': 'application/json',
    //             // 'Accept-Encoding': 'gzip'
    //         },
    //         mode: 'no-cors',
    //     }).then(res => {
    //         console.log(res);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    //     console.log(REACT_APP_AUTHH_KEY);
