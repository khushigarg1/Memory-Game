import React from "react";
import PropTypes from 'prop-types';

import './counter.styles.scss';
let min = 2;
let max = 100;
const Counter = ({ count, onClick, pace }) => {
    // console.log(pace);

    // const Setnum = () => {
    //     if (pace === "easy") {
    //         min = 2;
    //         max = 16;
    //         onClick(8)
    //     }
    //     else if (pace === "moderate") {
    //         min = 16;
    //         max = 32;
    //         onClick(20)
    //     }
    //     else if (pace === "hard") {
    //         min = 32;
    //         max = 70;
    //         onClick(50)
    //     }
    //     else {
    //         min = 70;
    //         max = 100;
    //         onClick(85)
    //     }
    // }
    const onDecrease = (e) => {
        e.preventDefault();
        // Setnum();
        const num = count - 2;
        if (num >= min) onClick(num);
    }
    const onIncrease = (e) => {
        e.preventDefault();
        // Setnum();
        const num = count + 2;
        if (num <= max) onClick(num);
    }
    return (
        <div>
            <button onClick={onDecrease}>-</button>
            <span>{count}</span>
            <button onClick={onIncrease}>+</button>
        </div>
    )
};

export default Counter;

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onclick: PropTypes.func.isRequired,
}