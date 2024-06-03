import logo from "/Logo_cdt.png"
import "./header.css"
import { FaPhone } from "react-icons/fa";
import { MdOutlinePhoneIphone,  MdAttachEmail, MdAccessTimeFilled} from "react-icons/md";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


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
        <div className="container header-flex">
          <div className="blockLeft">
            <div className="imageLogo">
              <Link to="/">
                 <motion.img custom={1.5} variants={textAnimation} src={logo} alt="" />
              </Link>
            </div>
            <div className="txtLogo">
              <motion.p custom={2} variants={textAnimation} className="header_logo_txt">МБУ ДО ЦЕНТР ДЕТСКОГО ТВОРЧЕСТВА КАНАВИНСКОГО РАЙОНА</motion.p>
              <motion.p custom={3} variants={textAnimation} className="Hello_English">Creative association «Communication without borders»</motion.p>
            </div>
          </div>
          <div className="blockRight">
            <div className="blockUl">
              <ul>
                <motion.li custom={1.5} variants={blockAnimation}>
                    <span><FaPhone size={16} color="gray"/></span>
                    <p>+7(831)243-15-96</p>
                </motion.li>
                <motion.li custom={2} variants={blockAnimation}>
                  <span><MdOutlinePhoneIphone size={16} color="gray"/></span>
                  <p>+7(831)243-18-93</p>
                </motion.li>
                <motion.li custom={3} variants={blockAnimation}>
                  <span><MdAttachEmail size={16} color="gray"/></span>
                  <p>cdt_kan_nn@mail.52gov.ru</p>
                </motion.li>
                <motion.li custom={4} variants={blockAnimation}>
                  <span><MdAccessTimeFilled size={16} color="gray"/></span>
                  <p>Пн-Сб 8.00 - 20.00</p>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.header>
    )
  }