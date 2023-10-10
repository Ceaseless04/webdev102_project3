import { useState } from "react";
import Card from "./Card";
import '../styles/FlashCard.css';

export default function FlashCard({ flashcards }) {
    
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    function nextCard() {
        if(currentCardIndex < flashcards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setIsFlipped(false);
        }
    }

    function prevCard() {
        if(currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setIsFlipped(false);
        }
    }

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="flashcard-container">
            <Card
                card={flashcards[currentCardIndex]}
                isFlipped={isFlipped}
                flipcard={flipCard}
            />
            <div className="button-container">
                <button onClick={prevCard} disabled={currentCardIndex === 0}>
                    &lt;
                </button>
                <button onClick={nextCard} disabled={currentCardIndex === flashcards.length - 1}>
                    &gt;
                </button>
            </div>
        </div>
    );
}