import "./spayder.css"
import img_student from "/ENG.png"

export default function Spayder(){
    return (
      <section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        Развивайся играя
                    </div>
                    <div className="promo__desc">
                        <p>Творческое обьединение «Общайся без границ»</p>
                    </div>
                    <div className="promo__rcs">
                        <p>Мы собрали интерактивные игры, тесты, задания. Чтобы вам было легче усвоить материал. pass</p>
                    </div>
                </div>
                <div className="promo__animation">
                    <img src={img_student} alt="" />
                </div>
            </div>
        </div>
      </section>
    )
  }