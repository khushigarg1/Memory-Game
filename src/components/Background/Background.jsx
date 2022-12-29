import React from 'react';
import './Background.styles.scss';

const cubes = [...Array(10)];

const Background = () => (
    <div className="area">
        <ul className="cubes">
            {cubes.map((cube, i) => (
                <li key={i}></li>
            ))}
        </ul>
    </div>
);

export default Background;