import './educational_cards.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import HoverLableTextChange from '../../../../components/HoverLableTextChange/HoverLableTextChange'

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
                    <h1><HoverLableTextChange oldText="learning colors" newText="изучение цветов" /></h1>
                    <img src="https://vadimkurkin.com/upload/medialibrary/5a6/5a63dab5c2cea035e23163f9abaaed23.jpg" alt="" />
                  </div>
                  <div className="text_color">
                    В этой карточке вы можете погрузиться в мир цветов и изучить их разнообразие!  Узнайте названия цветов на английском и связанные с ними предметы и явления. Разнообразные задания помогут вам научиться распознавать и называть цвета с уверенностью.
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
                    <h1><HoverLableTextChange oldText="food research" newText="Питание" /></h1>
                    <img src="https://flomaster.top/uploads/posts/2023-10/1697544073_flomaster-top-p-risunki-yedi-pinterest-1.jpg" alt="" />
                  </div>
                  <div className="text_color">
                  В этой карточке вы окунетесь в захватывающий мир кулинарной науки и узнаете об огромном разнообразии продуктов питания. Разгадайте тайны кулинарных традиций различных стран, усвойте названия продуктов на английском и знакомьтесь с их уникальными свойствами.
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
                    <h1><HoverLableTextChange oldText="types of clothin" newText="виды одежды" /></h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhADYRCpmjf4qSvYJer4mBxRFtuqwMdbZi0w&s" alt="" />
                  </div>
                  <div className="text_color">
                    В этой карточке вы познакомитесь с удивительным миром моды. Узнаете названия различных видов одежды на английском языке, разберетесь в их стилевых особенностях. Вы расширите свой гардеробный словарный запас и узнаете о том, как правильно подбирать одежду.
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