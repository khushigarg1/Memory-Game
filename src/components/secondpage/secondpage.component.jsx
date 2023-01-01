import { useEffect, useState } from 'react';
import Background from '../Background/Background';
import SingleCard from '../singlecard/singlecard';
import './secondpage.styles.scss';

import GetImages from '../images/images';
import { Link } from 'react-router-dom';
import FirstPage from '../FirstPage/firstpage.component';
// const cardImages =
//     [
//         { "src": "/img/img1.png", matched: false },
//         { "src": "/img/img2.png", matched: false },
//         { "src": "/img/img3.png", matched: false },
//         { "src": "/img/img4.png", matched: false },
//         { "src": "/img/img5.png", matched: false },
//         { "src": "/img/img6.png", matched: false },
//     ]

const PACES = {
    easy: 1500,
    moderate: 1000,
    hard: 600,
    pro: 300,
}

const SeondPage = ({ gameOptions }) => {
    // function SeondPage({ gameOptions }) {


    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    // const [buttontext, setButtonText] = useState("Click me to start a game");


    // const [isLoading, setisLoading] = useState(true);
    const images = GetImages(gameOptions);
    console.log({ images });
    const cardImages = images.map((image) => ({
        src: image.src,
        matched: false,
    }));


    // useEffect(() => {
    //     if(images.length > 0) setisLoading(false) 
    // },[images])


    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        console.log(cards);
        setTurns(0)

        // setButtonText("new Game");
    }
    // console.log(cards, turns);
    //handle achoice
    const handleChoice = (card) => {
        console.log(card);
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    //hooks compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                console.log('those cards match')
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        }
                        else {
                            return card
                        }
                    })
                })
                resetTurn()
            }
            else {
                console.log("dont match")
                setTimeout(() => { resetTurn() }, PACES[gameOptions[1]])
            }
        }
    }, [choiceOne, choiceTwo])
    //in sattes we are keeping tarck whcih card ahs been macthed
    // console.log(cards);
    //reset all chocies and trun
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    //start a game automatically
    useEffect(() => {
        shuffleCards();
    }, [])

    return (
        <>
            <Background />
            <div className='secondcard'>

                <h1>Memory Game</h1>
                <button onClick={shuffleCards}>Play</button>

                <button >
                    <Link to="/" >Back</Link>
                </button>

                <div className="card-grid" >
                    {cards.map(card => (
                        <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
                    ))}
                </div>
                <p>Turns: {turns}</p>
            </div>
        </>
    );
}

export default SeondPage;
