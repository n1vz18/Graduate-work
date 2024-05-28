import './body_eat.css'
import { motion } from "framer-motion"
import ContaynerBack from '../../../../components/ContaynerBack/ContaynerBack'



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
  { english: "The apple is ", russian: "красный", options: ["Red", "Blue", "Black"], correctAnswer: "Red", answeredCorrectly: null },
  { english: "Bananas are ", russian: "желтый", options: ["Green", "Red", "Yellow"], correctAnswer: "Yellow", answeredCorrectly: null },
  { english: "Trees are ", russian: "зелёный", options: ["Green", "Red", "Yellow"], correctAnswer: "Green", answeredCorrectly: null },
  { english: "Plums are ", russian: "фиолетовый", options: ["Black", "Blue", "Violet"], correctAnswer: "Violet", answeredCorrectly: null },
  { english: "A mouse is  ", russian: "серый", options: ["White", "Gray", "Silver"], correctAnswer: "Gray", answeredCorrectly: null },
  { english: "Roses are ", russian: "розовый", options: ["Pink", "Red", "Black"], correctAnswer: "Pink", answeredCorrectly: null },
  { english: "The hat is ", russian: "черный", options: ["Green", "Yellov", "Black"], correctAnswer: "Black", answeredCorrectly: null },
  { english: "The sky is ", russian: "синий", options: ["Blue", "White", "Gray"], correctAnswer: "Blue", answeredCorrectly: null },
  { english: "A book is ", russian: "розовый", options: ["Brown", "Green", "Red"], correctAnswer: "Brown", answeredCorrectly: null },
];


export default function BodyEat(){
    return (
      <motion.div initial="hidden" whileInView="visible">
        <div className="container">
          <ContaynerBack/>
          <div className="nameLabebleColor">
            <div className="h1LableColor">
              <h1>Изучаем тему «Еда»</h1>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>1. Речевая разминка: Listen to me, and repeat the poem - послушай меня и повтори стихотворение</p></div>
            <div className="zadanie"><p>Spring is green</p><p>Summer is bright</p><p>Autumn is yellow</p><p>Winter is white.</p></div>
          </div>
        </div>
      </motion.div>
    )
  }