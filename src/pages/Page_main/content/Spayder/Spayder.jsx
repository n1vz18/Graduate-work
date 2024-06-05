import "./spayder.css"
import img_student from "/ENG.png"
import { motion } from "framer-motion"



const blockAnimation = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
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


export default function Spayder(){
    return (
      <motion.section initial="hidden" whileInView="visible" className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__animation">
                    <motion.img custom={1.7} variants={blockAnimation} src={img_student} alt="" />
                </div>
                <div className="promo__text">
                    <div className="promo__title">
                        <motion.h1 custom={2} variants={textAnimation}>Развивайся, играя</motion.h1>
                    </div>
                    <div className="promo__desc">
                        <motion.p custom={2.5} variants={textAnimation}>Творческое обьединение «Привет, английский!»</motion.p>
                        <motion.p custom={3} variants={textAnimation}>Мы собрали интерактивные задания. Чтобы вам было легче усвоить материал.</motion.p>
                    </div>
                    <div className="promo__rcs">
                        <motion.a custom={3.5} variants={textAnimation} className="textCdt" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} href="https://cdt-kanavino.ru/">Сайт МБУ ДО ЦДТ Канавинского района</motion.a>
                        <motion.a custom={4} variants={textAnimation} className="helloengl" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} href="https://xn--52-kmc.xn--80aafey1amqq.xn--d1acj3b/program/1405-privet-angliiskii">Записаться в творческое обьединение «Hello, English!»</motion.a>
                    </div>
                </div>
            </div>
        </div>
      </motion.section>
    )
  }