import { useState } from "react";
import Card from "./Card";
import '../styles/FlashCard.css';

export default function FlashCard({ flashcards }) {
    
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [currStreak, setCurrStreak] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [long_str, setLong_strk] = useState(0);

    function current_Streak() {
        if(!isCorrect) {
            setCurrStreak(currStreak + 1);
            setIsCorrect(true);
        }
        else {
            setCurrStreak(0);
        }
    }

    function longest_streak() {
        if(currentCardIndex == flashcards.length - 1) {
            setLong_strk(long_str + currStreak);
        }
    }

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
            <p>Current Streak: {currStreak}, Longest Streak: {longest_streak}</p>
            <Card
                card={flashcards[currentCardIndex]}
                isFlipped={isFlipped}
                flipcard={flipCard}
            />
            <p>Guess the answer here:</p>
            <input placeholder="Place your answer here"></input>
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