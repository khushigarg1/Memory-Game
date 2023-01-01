import './singlecard.styles.scss';
// export const SingleCard = ({ card }) => {

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className='card' >
            <div className={flipped ? "flipped" : ""}>
                <img className="front"
                    src={card.src.medium}
                    alt="card front" />
                <img className="back"
                    onClick={handleClick}
                    src="/img/back.png"
                    alt="card back" />
            </div>
        </div>
    )
}