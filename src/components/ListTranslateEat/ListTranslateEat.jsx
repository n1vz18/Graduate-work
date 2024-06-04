import './list_translate_eat.css'
import AudioTxtComponent from '../AudioTxtComponent/AudioTxtComponent'
import mineral_waterAudio from '../../assets/mineral_waterAudio.mp3'
import juiceAudio from '../../assets/juiceAudio.mp3'
import milkAudio from '../../assets/milkAudio.mp3'
import vegetablesAudio from '../../assets/vegetablesAudio.mp3'
import fishAudio from '../../assets/fishAudio.mp3'
import chickenAudio from '../../assets/chickenAudio.mp3'
import meatAudio from '../../assets/meatAudio.mp3'
import soupsAudio from '../../assets/soupAudio.mp3'
import saladAudio from '../../assets/saladAudio.mp3'
import pepperAudio from '../../assets/pepperAudio.mp3'
import sugarAudio from '../../assets/sugarAudio.mp3'
import cheeseAudio from '../../assets/cheeseAudio.mp3'
import porridgeAudio from '../../assets/porridgeAudio.mp3'
import coffeeAudio from '../../assets/coffeeAudio.mp3'
import teaAudio from '../../assets/teaAudio.mp3'
import a_cakeAudio from '../../assets/a_cakeAudio.mp3'
import toastAudio from '../../assets/toastAudio.mp3'
import a_sandwichAudio from '../../assets/a_sandwichAudio.mp3'



export default function listTranslateEat(){
    return (
      <div className="zadanie_translate_eat">
              <ul className='ul-translate'>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://img.vkusvill.ru/pim/images/site_LargeWebP/1c069624-eabb-42a6-b44a-b057eb007e46.webp?1660228097.856" alt="сендвич" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={a_sandwichAudio}/></div>
                      <div className="text_eatdiv">a sandwich - бутерброд</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.simplyrecipes.com/thmb/20YogL0tqZKPaNft0xfsrldDj6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__01__cinnamon-toast-horiz-a-1800-5cb4bf76bb254da796a137885af8cb09.jpg" alt="Поджаренный хлеб" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={toastAudio}/></div>
                      <div className="text_eatdiv">toast — поджаренный хлеб</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.bhg.com/thmb/QoxVJrAGOSUztURJUsV5l2w_hz0=/1500x0/filters:no_upscale():strip_icc()/recipes-how-to-bake-how-to-make-a-cake-12-7b9805cf02de49e4a7a054b2a28c1bc8.jpg" alt="Торт" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={a_cakeAudio}/></div>
                      <div className="text_eatdiv">a cake — торт, пирожное</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg" alt="Чай" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={teaAudio}/></div>
                      <div className="text_eatdiv">tea — чай</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.coffee-bean.ru/upload/iblock/258/2586818d2194fb8965623e9574ff379e.jpg" alt="Кофе" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={coffeeAudio}/></div>
                      <div className="text_eatdiv">coffee — кофе</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.mentoday.ru/upload/img_cache/c88/c88a4e3b4f0467bd78552c3c349b8cf7_ce_1500x1000x0x0.jpg" alt="Сахар" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={sugarAudio}/></div>
                      <div className="text_eatdiv">sugar — сахар</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://sotni.ru/wp-content/uploads/2023/08/pshennaia-kasha-s-tykvoi-1.webp" alt="Каша" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={porridgeAudio}/></div>
                      <div className="text_eatdiv">porridge — каша</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://cdn.tveda.ru/medialibrary/997/997c6fe5d42100eb81a9bf55ebe0d9d4/f54e666a04fc955531171f75e7252e90.jpg" alt="Сыр" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={cheeseAudio}/></div>
                      <div className="text_eatdiv">cheese — сыр</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://tv-gubernia.ru/wp-content/uploads/2024/02/foto_plant_1.jpg" alt="Перец" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={pepperAudio}/></div>
                      <div className="text_eatdiv">pepper — перец</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://static01.nyt.com/images/2022/07/15/dining/MC-Chopped-Salad-15SALADREX/merlin_209652387_1b5eee4c-9da5-443c-90e0-db20ee51a246-threeByTwoMediumAt2X.jpg" alt="Салат" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={saladAudio}/></div>
                      <div className="text_eatdiv">salad — салат</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://buterbropub.ru/wp-content/uploads/2019/07/vengerskij-gulyash.jpg" alt="Суп" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={soupsAudio}/></div>
                      <div className="text_eatdiv">soup  — суп</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://emeat.ru/assets/images/resources/9923/8484626.jpg" alt="Мясо" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={meatAudio}/></div>
                      <div className="text_eatdiv">meat  — мясо</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://secretmag.ru/imgs/2023/09/12/10/6136088/1bc2a1dbf4fb9a520a4fbd10e3553b6e5eeff385.jpg" alt="курица" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={chickenAudio}/></div>
                      <div className="text_eatdiv">chicken — курица</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://static.tildacdn.com/tild3762-6635-4366-b535-363535363664/-7.jpeg" alt="Рыба" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={fishAudio}/></div>
                      <div className="text_eatdiv">fish — рыба</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.hibiny.ru/images/news/2024/314185/dfc3b5994344eae0cd2c392851e4672a.jpg" alt="Овощи" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={vegetablesAudio}/></div>
                      <div className="text_eatdiv">vegetables — овощи</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://www.ermolino-produkty.ru/picts/products/tnw1980-Moloko_kompoziciya.jpg" alt="Молоко" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={milkAudio}/></div>
                      <div className="text_eatdiv">milk — молоко</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://resizer.mail.ru/p/de8e63f7-0a51-52ea-b12f-4f267da61125/AQAGl6ISJ2CeiTubXeegFqXGznw5ybkdtstKdFrIkhHIyXXgmBg18XKHAdKnFrVA7tNrxQqEUwvXv53dC0qpL32H7Hw.jpg" alt="Сок" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={juiceAudio}/></div>
                      <div className="text_eatdiv">juice — сок</div>
                    </div>
                  </div>
                </li>
                <li className="eat-block">
                  <div className="eat-ticket">
                    <div className='image-eat'><img src="https://static.tildacdn.com/tild3762-3339-4537-b437-366161613838/lechenie-mineralnoj-.jpg" alt="Миннеральная вода" /></div>
                    <div className="txttranslate">
                      <div className="audioTxt"><AudioTxtComponent audioFile={mineral_waterAudio}/></div>
                      <div className="text_eatdiv">mineral water — минеральная вода</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
    )
  }