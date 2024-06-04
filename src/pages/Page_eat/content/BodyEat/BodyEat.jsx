import './body_eat.css'
import { motion } from "framer-motion"
import ContaynerBack from '../../../../components/ContaynerBack/ContaynerBack'
import ListTranslateEat from '../../../../components/ListTranslateEat/ListTranslateEat'
import HoverLableTextChange from '../../../../components/HoverLableTextChange/HoverLableTextChange'
import WordHighlighter from '../../../../components/WordHighlighter/WordHighlighter'
import QuizBlockComponent from '../../../../components/QuizBlockComponent/QuizBlockComponent'
import EatFillInBlanksComponent from '../../../../components/EatFillInBlanksComponent/EatFillInBlanksComponent'



const colorWords = [
  { text: 'Mous', isColor: false, isCrossedOut: false },
  { text: 'Apple', isColor: true, isCrossedOut: false },
  { text: 'Meat', isColor: true, isCrossedOut: false },
  { text: 'Keyboard', isColor: false, isCrossedOut: false },
  { text: 'Ball', isColor: false, isCrossedOut: false },
  { text: 'Pen', isColor: false, isCrossedOut: false },
  { text: 'Cake', isColor: true, isCrossedOut: false },
  { text: 'Tea', isColor: true, isCrossedOut: false },
  { text: 'Coffee', isColor: true, isCrossedOut: false },
  { text: 'Table', isColor: false, isCrossedOut: false },
  { text: 'Banana', isColor: true, isCrossedOut: false },
  { text: 'Book', isColor: false, isCrossedOut: false },
];

const QuizBlock = [
  { english: "It is yellow and not sweet. We drink tea with him. This is a ", russian: "лимон", options: ["lemon", "cake", "tea"], correctAnswer: "lemon", answeredCorrectly: null },
  { english: "Every mouse likes it  ", russian: "сыр", options: ["meat", "cheese", "banana"], correctAnswer: "cheese", answeredCorrectly: null },
  { english: "They are red, green and yellow. They are round and sweet. It's  ", russian: "яблоки", options: ["apples", "coffee", "lemon"], correctAnswer: "apples", answeredCorrectly: null },
  { english: "It's yellow. The monkeys love it. This is a  ", russian: "банан", options: ["tea", "book", "banana"], correctAnswer: "banana", answeredCorrectly: null },
  { english: "You drink it every morning. This is  ", russian: "чай", options: ["tea", "sugar", "fish"], correctAnswer: "tea", answeredCorrectly: null },
  { english: "I am white. you can drink me. I'm from a cow.  ", russian: "Молоко", options: ["salad", "bread", "milk"], correctAnswer: "milk", answeredCorrectly: null },
  { english: "It is green and striped on the outside. red inside. This is a  ", russian: "арбуз", options: ["watermelon", "cheese", "fish"], correctAnswer: "watermelon", answeredCorrectly: null },
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
            <div className="pngSeasons">
              <div className="SeasonsItem"><img src="https://77.rospotrebnadzor.ru/images/fastfood.jpg" alt="Фастфуд" /></div>
              <div className="SeasonsItem"><img src="https://runews24.ru/assets/images/uploads/2024/1/19/7cf478da7ff809b7aadff41bca8c2750.png" alt="завтрак" /></div>
              <div className="SeasonsItem"><img src="https://www.ok-magazine.ru/images/cache/2023/3/3/heighten_1000_q90_1818841_fc232c8fd069e0a6a491292ff.jpeg" alt="Сладкое" /></div>
              <div className="SeasonsItem"><img src="https://pazlyigra.ru/uploads/posts/2021-01/1611123841_2020food___berries_and_fruits_and_nuts_lots_of_fresh_vegetables_and_fruits_close_up_145555_.jpg" alt="Овощи" /></div>
            </div>
            <div className="pLable"><p>1.Речевая разминка: Look at the pictures, please! Answer the questions. – посмотри на картинки пожалуйста! Ответь на вопросы.</p></div>
            <div className="zadanie">
              <HoverLableTextChange oldText="What do you like?" newText="Что тебе нравится?" />
              <HoverLableTextChange oldText="I like ... and ... Who likes milk?" newText="Я люблю... и... Кто любит молоко?" />
              <HoverLableTextChange oldText="Thank you very much!" newText="Большое спасибо!" />
              <p>Расскажите, пожалуйста. Какая еда вам навится?</p></div>
          </div>
          <div className="lable">
            <div className="pLable"><p>2.Работа по теме урока: Listen to me, try to find the worlds. – Послушай меня, постарайся повторить слова.</p></div>
            <ListTranslateEat/>
          </div>
          <div className="lable">
            <div className="pLable"><p>3.Работа по теме урока: Прочтите небольшой рассказ и отгадайте о каких животных идёт речь.</p></div>
            <div className="zadanie">
              <HoverLableTextChange oldText="1. Cats are smart and kind. They are white and black. They can run and jump. They likes..." newText="Кошки умные и добрые. Они белые и черные. Они могут бегать и прыгать. Им нравится молоко" />
              <HoverLableTextChange oldText="2. Monkeys are kind and cute. They jump. Loves ..." newText="Обезьянки добрые и милые. Они прыгают. Любят бананы" />
              <HoverLableTextChange oldText="3. Dogs are very smart. They are big and brave. They can run. They like ..." newText="Собаки очень умны. Они большие и храбрые. Они могут бежать. Они любят мясо" />
              <HoverLableTextChange oldText="4. Children are very emotional. They run and jump. They love ..." newText="Дети очень эмоциональны. Они бегают и прыгают. Они любят сладости" />
              <HoverLableTextChange oldText="5. The mouse is very small and shy. She loves ..." newText="Мышь очень маленькая и пугливая. Она любит сыр" />
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
            <div className="pLable"><p>Упражнение 2</p><p>У нас есть несколько загадок. Отгадаете?</p></div>
            <div className="zadanie">
              <QuizBlockComponent items={QuizBlock} />
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>Упражнение 3</p><p>Прочитайте небольшой рассказ и вместе с преподователем назовите продукт по описанию.</p></div>
            <div className="zadanie">
              <p>1. You need me to make a sandwich or toast.</p>
              <p>2. I'm yellow or white. I'm made from milk. People like me on their pizza.</p>
              <p>3. People eat us fried, boiled or scrambled.</p>
              <p>4. I'm a very pipular fast food with a sausage in the middle.</p>
              <p>5. I'm a long yellow fruit.</p>
              <p>6. Rabbits love this orange vegetable.</p>
            </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>Упражнение 4</p><p>Вставьте слова в предложения: paprika, beans, potato, gherkins, zucchini.</p></div>
            <div className="zadanie">
              <EatFillInBlanksComponent />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }