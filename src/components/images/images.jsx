import { createClient } from 'pexels';
import { useState } from 'react';
import { useEffect } from 'react';

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);
const REACT_APP_AUTHH_KEY = "563492ad6f917000010000014b522c56a3b24e0ba1e2d54e486f8786"
const GetImages = (gameOptions) => {
    console.log("category", gameOptions[0]);
    console.log("count", gameOptions[2]);
    const [images, setImages] = useState([]);

    /*
    Gameoptions data 
    options 
    (3) ['nature', 'easy', 10]
    0:"nature"
    1:"easy"
    2:10
    length : 3
    [[Prototype]]
    : 
    Array(0)
    */
    const fetchphotos = () => {
        const client = createClient(process.env.REACT_APP_AUTHH_KEY);
        client.photos.search({
            query: gameOptions[0],
            orientation: 'square',
            size: 'small',
            per_page: gameOptions[2] / 2,
            page: getRandomPage(),
        }).then(Response => {
            // setImages(Response.photos)
            setImages(Response.photos)
            // console.log(Response.photos);
        });
    }
    useEffect(() => {
        if (!gameOptions) return;
        fetchphotos();
    }, [gameOptions]);


    return images;
}

export default GetImages;