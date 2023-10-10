import '../styles/Card.css';

export default function Card({ card, isFlipped, flipcard }) {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipcard}>
            <div className="inner-card">
                <div className="front-card">
                    <p>{card.question}</p>
                    {/* <p className='options'>
                        {card.options}
                    </p> */}
                </div>
                <div className="back-card">
                    <p>{card.answer}</p>
                </div>
            </div>
        </div>
    );
}