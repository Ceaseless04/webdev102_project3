import FlashCard from './components/FlashCard';
import './styles/App.css'

const def_sample_card = [
            {
                id: 1,
                question: 'What does OOP stand for?',
                answer: 'Object Oriented Programming',
                options: [
                    'Oopsie',
                    'Object Oriented Programming',
                    'One One Pain',
                    'I do not know',
                ],
            },
            {
                id: 2,
                question: 'What are the 4 Principles of OOP?',
                answer: 'Abstraction, Encapsulation, Inheritance, Polymorphism',
                options: [
                    'Classes, Methods, Constructors, Instances',
                    'Ice cream, yogurt, cheese, burgers',
                    'ints, doubles, strings, char',
                    'Abstraction, Encapsulation, Inheritance, Polymorphism'
                ],
            },
            {
                id: 3,
                question: 'Is this code correct (y is an integer): double divide = (double) x / y',
                answer: 'Yes',
                options: [
                    'Yes',
                    'No'
                ],
            },
            {
                id: 4,
                question: 'Can you make your own data types with OOP languages such as Java?',
                answer: 'Yes, making objects by referencing classes',
                options: [
                    'Yes, making objects by referencing classes',
                    'No',
                    'I do not know'
                ],
            },
            {
                id: 5,
                question: 'How many popular operating systems are in use today?',
                answer: '3: Windows, Apple, Linux',
                options: [
                    '1: only Apple!',
                    '2: Windows and Apple',
                    '3: Windows, Apple, Linux'
                ],
            }
        ];


function App() {

  return (
    <div>
      <h3>CS Concepts Review</h3>
      <h4>Hey There!</h4>
      <h5>Here are 5 quick flashcards to test your coding concepts!</h5>
      <FlashCard flashcards={def_sample_card}/>
    </div>
  )
}

export default App
