import './cloth_img_fillIn.css'
import React, { useState } from 'react';



const FillBlanksComponent = () => {
  const [answers, setAnswers] = useState(['', '', '', '', '', '']);
  const correctAnswers = ['shirt', 'overcoat', 'sneakers', 'dress', 'blouse'];


  const handleInputChange = (index, event) => {
      const newAnswers = [...answers];
      newAnswers[index] = event.target.value;
      setAnswers(newAnswers);
  };

  const checkAnswer = (index, answer) => {
      return answer.toLowerCase() === correctAnswers[index];
  };

  const getBorderStyle = (index) => {
      return {
          border: `2px solid ${checkAnswer(index, answers[index]) ? 'lightgreen' : 'lightcoral'}`,
          borderRadius: '8px',
          padding: '5px',
          margin: '5px'
      };
  };

  return (
      <>
        <ul>
            <li className="eat-block">
                <div className="eat-ticket">
                    <div className='image-eat'><img src="https://cs5.livemaster.ru/storage/77/e3/49d915113b19e05a9763c2fe21x1--vintazh-trend-tartan-zhenskaya-rubashka-v-kletku-premium-germ.jpg" alt="рубашка" /></div>
                    <div className="txttranslate">
                      <div className="text_eatdiv"><input type="text" value={answers[0]} onChange={(e) => handleInputChange(0, e)} style={getBorderStyle(0)} /></div>
                    </div>
                </div>
            </li>
            <li className="eat-block">
                <div className="eat-ticket">
                    <div className='image-eat'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWbRxxOSZSSGY2egp1pg_QflSaqxo2XgRXA&s" alt="пальто" /></div>
                    <div className="txttranslate">
                      <div className="text_eatdiv"><input type="text" value={answers[1]} onChange={(e) => handleInputChange(1, e)} style={getBorderStyle(1)} /></div>
                    </div>
                </div>
            </li>
            <li className="eat-block">
                <div className="eat-ticket">
                    <div className='image-eat'><img src="https://static1.squarespace.com/static/5a2c77d812abd9bc7ab2b450/t/663a6e54b3223e71d682c915/1715105364573/0883_final.jpg?format=1500w" alt="кросовки" /></div>
                    <div className="txttranslate">
                      <div className="text_eatdiv"><input type="text" value={answers[2]} onChange={(e) => handleInputChange(2, e)} style={getBorderStyle(2)} /></div>
                    </div>
                </div>
            </li>
            <li className="eat-block">
                <div className="eat-ticket">
                    <div className='image-eat'><img src="https://repost.uz/storage/uploads/0-1715117836-portal-post-material.jpeg" alt="Платье" /></div>
                    <div className="txttranslate">
                      <div className="text_eatdiv"><input type="text" value={answers[3]} onChange={(e) => handleInputChange(3, e)} style={getBorderStyle(3)} /></div>
                    </div>
                </div>
            </li>
            <li className="eat-block">
                <div className="eat-ticket">
                    <div className='image-eat'><img src="https://cs2.livemaster.ru/storage/6d/25/a484fac4498ecfddc6f7c83fc4gp--odezhda-bluza-s-plankoj-tvistom.jpg" alt="блузка" /></div>
                    <div className="txttranslate">
                      <div className="text_eatdiv"><input type="text" value={answers[4]} onChange={(e) => handleInputChange(4, e)} style={getBorderStyle(4)} /></div>
                    </div>
                </div>
            </li>
        </ul>
      </>
  );
};

export default FillBlanksComponent;