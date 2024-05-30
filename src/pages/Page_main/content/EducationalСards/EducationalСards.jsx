import './educational_cards.css'
import { motion } from "framer-motion"
import img_colors from '/colors.jpg'
import { Link } from 'react-router-dom'

const blockAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.3}
  }),
}
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


export default function EducationalСards (){
  return(
    <motion.section initial="hidden" whileInView="visible" className="Body">
      <div className="container">
          <motion.div custom={1.5} variants={blockAnimation} className="cards">

            <motion.div custom={2.5} variants={textAnimation} whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.6 }} className="cards_color">
                <div className="block_tickets">
                  <div className="image_color">
                    <h1>learning colors</h1>
                    <img src={img_colors} alt="" />
                  </div>
                  <div className="text_color">
                    В этой карточке вы можете погрузиться в мир цветов и изучить их разнообразие!  Узнайте названия цветов на английском и связанные с ними предметы и явления. Разнообразные задания помогут вам научиться распознавать и называть цвета с уверенностью
                  </div>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="span_text_color">
                    <Link to="/pageColor">
                      <motion.span>Начать изучать</motion.span>
                    </Link>
                  </motion.div>
                </div>
            </motion.div>

            <motion.div custom={3.5} variants={textAnimation} whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.6 }} className="cards_food">
            <div className="block_tickets">
                  <div className="image_food">
                    <h1>food research</h1>
                    <img src={img_colors} alt="" />
                  </div>
                  <div className="text_color">
                    В этой карточке вы можете погрузиться в мир цветов и изучить их разнообразие!  Узнайте названия цветов на английском и связанные с ними предметы и явления. Разнообразные задания помогут вам научиться распознавать и называть цвета с уверенностью
                  </div>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="span_text_food">
                    <Link to="/pageEat">
                      <motion.span>Начать изучать</motion.span>
                    </Link>
                  </motion.div>
                </div>
            </motion.div>

            <motion.div custom={4.5} variants={textAnimation} whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.6 }} className="cards_clothes">
              <div className="block_tickets">
                  <div className="image_cloth">
                    <h1>types of clothing</h1>
                    <img src={img_colors} alt="" />
                  </div>
                  <div className="text_color">
                    В этой карточке вы можете погрузиться в мир цветов и изучить их разнообразие!  Узнайте названия цветов на английском и связанные с ними предметы и явления. Разнообразные задания помогут вам научиться распознавать и называть цвета с уверенностью
                  </div>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="span_text_cloth">
                    <Link to="/pageCloth">
                      <motion.span>Начать изучать</motion.span>
                    </Link>
                  </motion.div>
                </div>
            </motion.div>
          </motion.div>
      </div>
    </motion.section>
  )
}