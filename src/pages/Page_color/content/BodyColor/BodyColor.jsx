import './body_color.css'
import { motion } from "framer-motion"
import ContaynerBack from '../../../../components/ContaynerBack/ContaynerBack'
import WordHighlighter from '../../../../components/WordHighlighter/WordHighlighter'
import QuizBlockComponent from '../../../../components/QuizBlockComponent/QuizBlockComponent'
import ColorFillInBlanksComponent from '../../../../components/ColorFillInBlanksComponent/ColorFillInBlanksComponent'
import AudioComponent from '../../../../components/AudioComponent/AudioComponent'
import AudioTxtComponent from '../../../../components/AudioTxtComponent/AudioTxtComponent'
import audioLable1 from '../../../../assets/Lable1Color.mp3'
import greenAudio from '../../../../assets/greenAudio.mp3'
import blueAudio from '../../../../assets/blueAudio.mp3'
import brownAudio from '../../../../assets/brownAudio.mp3'
import grayAudio from '../../../../assets/grayAudio.mp3'
import beigeAudio from '../../../../assets/beigeAudio.mp3'
import blackAudio from '../../../../assets/blackAudio.mp3'
import orangeAudio from '../../../../assets/orangeAudio.mp3'
import pinkAudio from '../../../../assets/pinkAudio.mp3'
import purpleAudio from '../../../../assets/purpleAudio.mp3'
import redAudio from '../../../../assets/redAudio.mp3'
import scarletAudio from '../../../../assets/scarletAudio.mp3'
import silverAudio from '../../../../assets/silverAudio.mp3'
import violetAudio from '../../../../assets/violetAudio.mp3'
import whiteAudio from '../../../../assets/whiteAudio.mp3'
import yellowAudio from '../../../../assets/yellowAudio.mp3'

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
  { english: "A book is ", russian: "коричневый", options: ["Brown", "Green", "Red"], correctAnswer: "Brown", answeredCorrectly: null },
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
            <div className="pngSeasons">
              <div className="SeasonsItem"><img src="https://uprostim.com/wp-content/uploads/2021/04/image089-1.jpg" alt="Spring" /></div>
              <div className="SeasonsItem"><img src="https://klike.net/uploads/posts/2023-01/1674396452_3-63.jpg" alt="Summer" /></div>
              <div className="SeasonsItem"><img src="https://klike.net/uploads/posts/2022-08/1661232497_j-4.jpg" alt="Autumn" /></div>
              <div className="SeasonsItem"><img src="https://www.w-dog.ru/wallpapers/10/15/544320050508419/priroda-derevya-sad-park-fonar-dom-zima-sneg-nebo-pejzazh-zimnie-belyj.jpg" alt="Winter" /></div>
            </div>
            <div className="pLable"><p>1. Речевая разминка: Listen to me, and repeat the poem - послушай меня и повтори стихотворение</p></div>
            <div className="zadanie zadinie_lable"><div><p>Spring is green</p><p>Summer is bright</p><p>Autumn is yellow</p><p>Winter is white.</p></div> <AudioComponent audioFile={audioLable1}/></div>
          </div>
          <div className="lable">
            <div className="pLable"><p>2. Работа по теме урока Listen to me, try to remember the colours - Послушай меня, постарайся запомнить цвета.</p></div>
            <div className="zadanie zadinie_lable_translate">
              <div>
                <p>Основные цвета на английском языке: </p>
                  <ul>
                    <li className="color-block">
                      <div className='cube-green'></div>
                      <div className="text_colordiv">green — зелёный</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={greenAudio}/></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-blue'></div>
                      <div className="text_colordiv">blue — синий, голубой</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={blueAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-yellow'></div>
                      <div className="text_colordiv">yellow — жёлтый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={yellowAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-red'></div>
                      <div className="text_colordiv">red — красный</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={redAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-gray'></div>
                      <div className="text_colordiv">gray — серый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={grayAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-orange'></div>
                      <div className="text_colordiv">orange — оранжевый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={orangeAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-black'></div>
                      <div className="text_colordiv">black — чёрный</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={blackAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-violet'></div>
                      <div className="text_colordiv">violet — фиолетовый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={violetAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-pink'></div>
                      <div className="text_colordiv">pink — розовый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={pinkAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-purple'></div>
                      <div className="text_colordiv">purple — сиреневый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={purpleAudio} /></div>
                    </li>
                    <li className="color-block">
                      <div className='cube-brown'></div>
                      <div className="text_colordiv">brown — коричневый</div>
                      <div className="audioTxt"><AudioTxtComponent audioFile={brownAudio} /></div>
                    </li>
                  </ul>
              </div>
              <div>
                <p>Также есть и другие часто употребляемые цвета: </p>
                <ul>
                  <li className="color-block">
                    <div className='cube-white'></div>
                    <div className="text_colordiv">white — белый</div>
                    <div className="audioTxt"><AudioTxtComponent audioFile={whiteAudio} /></div>
                  </li>
                  <li className="color-block">
                    <div className='cube-beige'></div>
                    <div className="text_colordiv">beige — бежевый</div>
                    <div className="audioTxt"><AudioTxtComponent audioFile={beigeAudio} /></div>
                  </li>
                  <li className="color-block">
                    <div className='cube-silver'></div>
                    <div className="text_colordiv">silver — серебряный</div>
                    <div className="audioTxt"><AudioTxtComponent audioFile={silverAudio} /></div>
                  </li>
                  <li className="color-block">
                    <div className='cube-scarlet'></div>
                    <div className="text_colordiv">scarlet — алый, ярко-красный</div>
                    <div className="audioTxt"><AudioTxtComponent audioFile={scarletAudio} /></div>
                  </li>
                </ul>
              </div>
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
            <div className="pLable"><p>4.Тренировка изучаемой лексики.</p><p>Упражнение 1</p></div>
            <div className="zadanie"><p>Go to the blackboard and find the words in column. Зачеркни лишнее слово в каждом столбце</p> <WordHighlighter wordsList={colorWords}/> </div>
          </div>
          <div className="lable">
            <div className="pLable"><p>Упражнение 2</p></div>
            <div className="zadanie"><p>Open your copy books, write down the date. Let’s do the exercise. Look at the blackboard.</p><p>Задание: Спиши предложения заменяя русские слова английскими, прочитайте слова</p> <QuizBlockComponent items={QuizBlock} /></div>
          </div>
          <div className="lable">
            <div className="pLable"><p>5.	Практическая часть</p></div>
            <div className="zadanie"><p>Let’s read the text. Fill in the gaps</p> <p>Ребята, прочитайте небольшой текст. Вам необходимо вставить слова в пропуски. Чтобы определить цвета , мы можем смешать краски! (orange, brown, blue, pink, white). Решите задание вместе с преподователем!</p> <ColorFillInBlanksComponent /> </div>
            
          </div>
        </div>
      </motion.div>
    )
  }