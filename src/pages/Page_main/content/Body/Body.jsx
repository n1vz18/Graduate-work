import './body.css'
import { motion } from "framer-motion"

const blockAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.3}
  }),
}


export default function Body (){
  return(
    <motion.section initial="hidden" whileInView="visible" className="Body">
      <div className="container">
          <motion.div custom={1.5} variants={blockAnimation} className="navigation_block">
            <motion.div custom={2.5} variants={blockAnimation} className="image">
              <img src="https://cdn-icons-png.flaticon.com/512/194/194931.png" alt="student" />
            </motion.div>
            <motion.div custom={3} variants={blockAnimation} className="navigation_text">
            Привет, друзья! 👋<br />C радостью приглашаю вас присоединиться к нашему увлекательному путешествию в мир английского языка, где каждое слово открывает перед вами новые горизонты знаний и возможностей! 🌍✨ <br />Здесь мы будем изучать материалы с помощью увлекательных, позновательных уроков, креативных заданий и захватывающих историй. 🎨 <br />После изучения материала вы сможете пройти мини-тестирование, чтобы закрепить полученные знания и уверенно шагать вперед на пути к своей цели!
            </motion.div>
          </motion.div>
      </div>
    </motion.section>
  )
}