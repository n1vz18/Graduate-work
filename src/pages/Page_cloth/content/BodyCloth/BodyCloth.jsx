import './body_cloth.css'
import { motion } from "framer-motion"
import ContaynerBack from '../../../../components/ContaynerBack/ContaynerBack'
import HoverLableTextChange from '../../../../components/HoverLableTextChange/HoverLableTextChange'
import WordHighlighter from '../../../../components/WordHighlighter/WordHighlighter'
import QuizBlockComponent from '../../../../components/QuizBlockComponent/QuizBlockComponent'
import ClothFillInBlanksComponent from '../../../../components/ClothFillInBlanksComponent/Cloth_fillIn'
import ListTranslateCloth from '../../../../components/ListTranslateCloth/ListTranslateCloth'
import ClothImgFillInBlanksComponent from '../../../../components/ClothImgFillInBlanksComponent/ClothImgFillIn'



const colorWords = [
  { text: 'Party', isColor: false, isCrossedOut: false },
  { text: 'Trousers', isColor: true, isCrossedOut: false },
  { text: 'Trainers', isColor: true, isCrossedOut: false },
  { text: 'Skirt', isColor: true, isCrossedOut: false },
  { text: 'Cheese', isColor: false, isCrossedOut: false },
  { text: 'Dress', isColor: true, isCrossedOut: false },
  { text: 'Shirts ', isColor: true, isCrossedOut: false },
  { text: 'Tea', isColor: false, isCrossedOut: false },
  { text: 'Dress shorts', isColor: true, isCrossedOut: false },
  { text: 'Suit', isColor: true, isCrossedOut: false },
  { text: 'Boots', isColor: true, isCrossedOut: false },
  { text: 'Banana', isColor: false, isCrossedOut: false },
];

const QuizBlock = [
  { english: "Kate is wearing red ", russian: "платье", options: ["dress", "hoes", "skirt"], correctAnswer: "dress", answeredCorrectly: null },
  { english: "Are you wearing a ", russian: "костюм", options: ["raincoat", "suit", "hoes"], correctAnswer: "suit", answeredCorrectly: null },
  { english: "I really like buying ", russian: "одежду", options: ["cloth", "blouse", "slippers"], correctAnswer: "cloth", answeredCorrectly: null },
  { english: "David is wearing a  ", russian: "кросовки", options: ["baseball cap", "T-shirt", "sneakers"], correctAnswer: "sneakers", answeredCorrectly: null },
];


export default function BodyCloth(){
    return (
      <motion.div initial="hidden" whileInView="visible">
        <div className="container">
          <ContaynerBack/>
          <div className="nameLabebleColor">
            <div className="h1LableColor">
              <h1>Изучаем тему «Одежда»</h1>
            </div>
          </div>
          <div  className="lable">
            <div className="block_png_eat">
              <div className="png1"><img src="https://garderob61.ru/images/006/288/620/6288620/990xnoinc/MhCnB_JMGvo.jpg" alt="Рубашка" /></div>
              <div className="png2"><img src="https://reflex-studio.ru/wa-data/public/shop/products/82/52/5282/images/11429/11429.750@2x.jpg" alt="Футболка" /></div>
              <div className="png3"><img src="https://ae01.alicdn.com/kf/S87c86c6abde84467b34e3a25663b6d0fX.jpg" alt="Платье" /></div>
            </div>
            <div className="pLable"><p>1.Речевая разминка: Look at the pictures, please! Answer the questions. – посмотри на картинки пожалуйста! Ответь на вопросы.</p></div>
            <div className="zadanie">
              <HoverLableTextChange oldText="What clothes do you see?" newText="Какую одежду вы видите?" />
              <HoverLableTextChange oldText="Do you like these clothes?" newText="Вам нравится эта одежда?" />
              <HoverLableTextChange oldText="Why, why not?" newText="Почему, почему нет?" />
              <HoverLableTextChange oldText="Would you like to have it?" newText="Хотели бы вы это иметь?" />
              <p>Наведитесь на текст если затрудняетесь с вопросом! 😃</p>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>2. Работа по теме урока: - Listen to me, try to find the words- Послушай меня, постарайся запомнить слова.</p></div>
            <ListTranslateCloth />
          </div>
          <div className="lable">
            <div className="pLable"><p>3. Работа по теме урока «Одежда по погоде»: Прочитай предложение и выбери подходящую одежду для разных погодных условий! Попробуй объяснить свой выбор на английском.</p></div>
            <div className="zadanie">
              <HoverLableTextChange oldText="On a rainy day I'll wear..." newText="В дождливый день я надену..." />
              <HoverLableTextChange oldText="On a hot summer day I would choose..." newText="В жаркий летний день я бы выбрал..." />
              <HoverLableTextChange oldText="For a windy day, I would put on..." newText="В ветреный день я бы надел..." />
              <HoverLableTextChange oldText="On a cold autumn evening I put on..." newText="Холодным осенним вечером я надел..." />
              <HoverLableTextChange oldText="For a day at the beach I would wear..." newText="На день на пляже я бы надел..." />
              <HoverLableTextChange oldText="On a spring morning I could wear..." newText="Весенним утром я мог надеть..." />
              <HoverLableTextChange oldText="For a frosty winter day I would choose..." newText="Для морозного зимнего дня я бы выбрал..." />
              <HoverLableTextChange oldText="On a cool night I'll wear..." newText="В прохладную ночь я надену..." />
              <HoverLableTextChange oldText="On a snowy day I would..." newText="В снежный день я бы..." />
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>4. Тренировка по изучаемой лексики.</p><p>Упражнение 1</p></div>
            <div className="zadanie">
              <p>Go to the blackboard and find the worlds in column. Зачеркни лишнее слово в каждом столбце.</p>
              <WordHighlighter wordsList={colorWords}/>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>Упражнение 2</p><p>Вставь пропущенное слово (по смыслу)</p></div>
            <div className="zadanie">
              <ClothFillInBlanksComponent />
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>Упражнение 3</p><p>Напишите название одежды по картинке.</p></div>
            <div className="zadanie">
              <ClothImgFillInBlanksComponent/>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>Упражнение 4</p><p>Вставьте слова в предложения:</p></div>
            <div className="zadanie">
              <QuizBlockComponent items={QuizBlock} />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }