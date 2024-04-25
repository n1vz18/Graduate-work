import logo from "/Logo_cdt.png"
import "./header.css"
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutlinePhoneIphone,  MdAttachEmail, MdAccessTimeFilled} from "react-icons/md";
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

export default function Header(){
    return (
      <motion.header initial="hidden" whileInView="visible" className="header">
        <div className="container">
          <div className="header__row">
            <div className="header_logo">
              <motion.img custom={1.5} variants={textAnimation} src={logo} alt="Logo" />
              <motion.span custom={2} variants={textAnimation} className="header_logo_span">Центр детского творчества Канавинского Района</motion.span>
              <motion.span custom={3} variants={textAnimation} className="Hello_English">Educational club «HELLO ENGLISH!»</motion.span></div>
            <div className="social_warp">
              <ul className="social_warp_ul">
                <motion.li custom={4} variants={blockAnimation}>
                  <span><FaPhone size={16} color="gray"/></span>
                  <a href="">+7(831)243-15-96</a>
                </motion.li>
                <motion.li custom={3} variants={blockAnimation}>
                  <span><MdOutlinePhoneIphone size={16} color="gray"/></span>
                  <a href="">+7(831)243-18-93</a>
                </motion.li>
                <motion.li custom={2} variants={blockAnimation}>
                  <span><MdAttachEmail size={16} color="gray"/></span>
                  <a href="">cdt_kan_nn@mail.52gov.ru</a>
                </motion.li>
                <motion.li custom={1.5} variants={blockAnimation}>
                  <span><MdAccessTimeFilled size={16} color="gray"/></span>
                  <a href="">Пн-Сб 8.00 - 20.00</a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.header>
    )
  }