import './body_color.css'
import { motion } from "framer-motion"
import ContaynerBack from '../../../../components/ContaynerBack/ContaynerBack'
import WordHighlighter from '../../../../components/WordHighlighter/WordHighlighter'
import QuizBlockComponent from '../../../../components/QuizBlockComponent/QuizBlockComponent'
import ColorFillInBlanksComponent from '../../../../components/ColorFillInBlanksComponent/ColorFillInBlanksComponent'
import AudioComponent from '../../../../components/AudioComponent/AudioComponent'
import audioLable1 from '../../../../assets/Lable1Color.mp3'

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


export default function BodyColor(){
    return (
      <motion.div initial="hidden" whileInView="visible">
        <div className="container">
          <ContaynerBack/>
          <div className="nameLabebleColor">
            <div className="h1LableColor">
              <h1>Изучаем тему «Цвета»</h1>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>1. Речевая разминка: Listen to me, and repeat the poem - послушай меня и повтори стихотворение</p></div>
            <div className="pngSeasons">
              <div className="SeasonsItem"><img src="https://uprostim.com/wp-content/uploads/2021/04/image089-1.jpg" alt="Spring" /></div>
              <div className="SeasonsItem"><img src="https://klike.net/uploads/posts/2023-01/1674396452_3-63.jpg" alt="Summer" /></div>
              <div className="SeasonsItem"><img src="https://klike.net/uploads/posts/2022-08/1661232497_j-4.jpg" alt="Autumn" /></div>
              <div className="SeasonsItem"><img src="https://www.w-dog.ru/wallpapers/10/15/544320050508419/priroda-derevya-sad-park-fonar-dom-zima-sneg-nebo-pejzazh-zimnie-belyj.jpg" alt="Winter" /></div>
            </div>
            <div className="audioLable"><AudioComponent audioFile={audioLable1}/></div>
            <div className="zadanie"><p>Spring is green</p><p>Summer is bright</p><p>Autumn is yellow</p><p>Winter is white.</p></div>
          </div>
          <div className="lable">
            <div className="pLable"><p>2. Работа по теме урока Listen to me, try to remember the colours - Послушай меня, постарайся запомнить цвета.</p></div>
            <div className="zadanie">
              <p>Основные цвета на английском языке: </p>
              <ul>
                <li className="color-green"> green — зелёный;</li>
                <li className="color-blue">blue — синий, голубой;</li>
                <li className="color-yellow">yellow — жёлтый;</li>
                <li className="color-red">red — красный;</li>
                <li className="color-gray">gray — серый;</li>
                <li className="color-orange">orange — оранжевый;</li>
                <li className="color-black">black — чёрный;</li>
                <li className="color-violet">violet — фиолетовый;</li>
                <li className="color-pink">pink — розовый;</li>
                <li className="color-purple">purple — сиреневый;</li>
                <li className="color-brown">brown — коричневый.</li>
              </ul>
              <p>Также есть и другие часто употребляемые цвета: </p>
              <ul>
                <li className="color-white">white — белый;</li>
                <li className="color-beige">beige — бежевый;</li>
                <li className="color-silver">silver — серебряный;</li>
                <li className="color-scarlet">scarlet — алый, ярко-красный, багряный.</li>
              </ul>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>3. Работа по теме урока Read it out loud- Прочитай в слух.</p></div>
            <div className="zadanie">
              <p>Учить цвета я стану, цвет по – английски COLOUR</p>
              <p>Я тону, иду ко дну, синий и голубой, конечно, BLUE</p>
              <p>Розовые розы падают на ринг, цвет красивый розовый по – английски PINK</p>
              <p>Ох, не спелый мандарин, он зеленый, просто GREEN</p>
              <p>Коричневое платье купила эта фрау, коричневый по – английски BROWN</p>
              <p>Мышонок серый, убегай скорей, серый по - английски GREY</p>
              <p>Oчень черный негр Джек, черный по – английски BLACK</p>
              <p>У меня сомнений нет, красный по – английски RED</p>
              <p>Уверен, ты запомнишь, оранжевый цвет – ORANGE</p>
              <p>В фиолетовых кедах топал, фиолетовый значит - PURPLE</p>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>4.Тренировка изучаемой лексики.</p></div>
            <div className="zadanie"><p>Упражнение 1</p> <p>Go to the blackboard and find the words in column. Зачеркни лишнее слово в каждом столбце</p> <WordHighlighter wordsList={colorWords}/> </div>
            <div className="zadanie"><p>Упражнение 2 - Письмо</p> <p>Open your copy books, write down the date. Let’s do the exercise. Look at the blackboard.</p><p>Задание: Спиши предложения заменяя русские слова английскими, прочитайте слова</p> <QuizBlockComponent items={QuizBlock} /></div>
          </div>
          <div className="lable">
            <div className="pLable"><p>5.	Практическая часть</p></div>
            <div className="zadanie"><p>Let’s read the text. Fill in the gaps</p> <p>Ребята, прочитайте небольшой текст. Вам необходимо вставить слова в пропуски. Чтобы определить цвета , мы можем смешать краски! ( orange,grey,blue, pink,yellow,purple). Решите задание вместе с преподователем!</p> <ColorFillInBlanksComponent /> </div>
            
          </div>
        </div>
      </motion.div>
    )
  }