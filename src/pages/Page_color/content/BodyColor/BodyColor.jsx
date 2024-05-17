import './body_color.css'
import { motion } from "framer-motion"
import ContaynerBack from '../../../../components/ContaynerBack/ContaynerBack'
import WordHighlighter from '../../../../components/WordHighlighter/WordHighlighter'
import QuizBlockComponent from '../../../../components/QuizBlockComponent/QuizBlockComponent'

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3}
  }),
}

const colorWords = [
  { text: 'Red', isColor: true, isCrossedOut: false },
  { text: 'Blue', isColor: true, isCrossedOut: false },
  { text: 'Black', isColor: true, isCrossedOut: false },
  { text: 'Apple', isColor: false, isCrossedOut: false },
  { text: 'Carrot', isColor: false, isCrossedOut: false },
  { text: 'Chair', isColor: false, isCrossedOut: false },
  { text: 'Yellow', isColor: true, isCrossedOut: false },
  { text: 'Green', isColor: true, isCrossedOut: false },
  { text: 'Orange', isColor: true, isCrossedOut: false },
  { text: 'Table', isColor: false, isCrossedOut: false },
  { text: 'Sun', isColor: true, isCrossedOut: false },
  { text: 'Book', isColor: false, isCrossedOut: false },
];

const QuizBlock = [
  { english: "The car is ", russian: "синий", options: ["Green", "Blue", "Black"], correctAnswer: "Blue", answeredCorrectly: null },
  { english: "The house is ", russian: "красный", options: ["Green", "Red", "Yellow"], correctAnswer: "Red", answeredCorrectly: null },
  { english: "The house is ", russian: "красный", options: ["Green", "Red", "Yellow"], correctAnswer: "Red", answeredCorrectly: null },
  { english: "The house is ", russian: "красный", options: ["Green", "Red", "Yellow"], correctAnswer: "Red", answeredCorrectly: null },
  { english: "The house is ", russian: "красный", options: ["Green", "Red", "Yellow"], correctAnswer: "Red", answeredCorrectly: null },
];


export default function BodyColor(){
    return (
      <motion.div initial="hidden" whileInView="visible">
        <h1>123</h1>
        <ContaynerBack/>
        <WordHighlighter wordsList={colorWords}/>
        <QuizBlockComponent items={QuizBlock} />
      </motion.div>
    )
  }