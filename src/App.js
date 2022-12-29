import { useEffect, useState } from 'react';
import Background from './components/Background/Background';
import './App.styles.scss';
import SingleCard from './components/singlecard/singlecard';

const cardImages =
    [
        { "src": "/img/img1.png", matched: false },
        { "src": "/img/img2.png", matched: false },
        { "src": "/img/img3.png", matched: false },
        { "src": "/img/img4.png", matched: false },
        { "src": "/img/img5.png", matched: false },
        { "src": "/img/img6.png", matched: false },
    ]


function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))


        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
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
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])
    //in sattes we are keeping tarck whcih card ahs been macthed
    console.log(cards);
    //reset all chocies and trun
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    //start a game automatically
    useEffect(() => {
        shuffleCards()
    }, [])
    return (
        <>
            <Background />
            <h1>Memory Game</h1>
            <button onClick={shuffleCards}>NEW GAME</button>

            <div className="card-grid" >
                {cards.map(card => (
                    <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
                ))}
            </div>
            <p>Turns: {turns}</p>
        </>
    );
}

export default App;
