import React from 'react';
import About from '../../images/about_us.jpeg'
import Services from '../../images/services.jpg'
import Solutions from '../../images/solutions.jpg';
import Sertificates from '../../images/sertificates.jpg'
import Contacts from '../../images/contacts.jpg'
import Footer from '../../components/Footer/Footer';
import '../Index/IndexPage.css'

function IndexPage() {
    return (
        <div>
            <div className="container-fluid mt-4 index-page">
                <p className="container p-4 intro">
                    Все представленные товары производятся только из высококачественных материалов на собственной производственной базе.
        Осуществляем комплектные поставки для гостиничного бизнеса.
        Возможны дополнительные услуги и товары по индивидуальным заказам.
            </p>
                <div className="row p-3" style={{ backgroundColor: "LightGray " }}>
                    <div className="col my-auto" >
                        <img src={About} className="col-img" alt="About company" />
                    </div>
                    <div className="col my-auto">
                        {/* style={{ listStyleType: "none" }} */}
                        <ul className="mx-3">
                            <li> О нас </li>
                            <li> Чем мы занимаемся</li>
                            {/* style={{ border: "0.1rem solid red", width: "30%" }} */}
                            <hr />
                            <li>Инжиниринг – это направление в производственной и научно-технической сфере, охватывающее исследования, разработку инноваций, проектирование, обеспечение и монтаж оборудования, строительство и пусконаладочные работы. Сюда же входят консультации, позволяющие снизить капитальные затраты на создание и переустройство производственных мощностей и их участков.Наша компания собрала в своем составе настоящих профессионалов в различных отраслях техники и технологии, механики и автоматики, стандартизации, сертификации и метрологии, науки.</li>
                        </ul>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col my-auto">
                        <ul className="mx-3">
                            <li>Наши услуги</li>
                            <li>Чем мы можем вам помочь</li>
                            <hr />
                            <li>Технологическая поддержка производств легкой промышленности включает в себя технологическое ведение производства и технологический аудит с выдачей готового решения, направленного на интенсификацию производства и увеличение производства и увеличение производительности.</li>
                        </ul>
                    </div>
                    <div className="col my-auto">
                        <img src={Services} className="col-img" alt="About Services" />
                    </div>
                </div>
                <div className="row p-3" style={{ backgroundColor: "LightGray" }}>
                    <div className="col my-auto" >
                    {/* style={{ height: "22rem" }} */}
                        <img src={Solutions} className="col-img"  alt="About our Solutions" />
                    </div>
                    <div className="col my-auto">
                        <ul className="mx-3">
                            <li>О нас</li>
                            <li>Технические решения для вашего производства</li>
                            <hr />
                            <li>- Оценка эффективности работы основного оборудования</li>
                            <li>- Модернизация существующего оборудования для повышения эффективности работы</li>
                            <li>- Анализ рынка и подбор нового оборудования и тех. оснастки</li>
                        </ul>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col my-auto">
                        <ul className="mx-3">
                            <li>О нас</li>
                            <li>Стандартизация и сертификация</li>
                            <hr />
                            <li>
                                Стандартизация процессов и продуктов: написание технологического регламента в соответствии с требованиями ГОСТ, разработка и написание ТУ, СТО, должностных, технологических инструкций, инструкция по охране труда
                            </li>
                            <li>
                                - Подготовка и проведение сертификации процессов и продуктов: ISO, СанПин, проведение испытаний и получение сертификатов соответствий в области пожарной сертификации, подготовка документов по требованиям таможенного союза
                        </li>
                        </ul>
                    </div>
                    <div className="col my-auto" >
                    {/* style={{ height: "30rem" }} */}
                        <img src={Sertificates} className="col-img"  alt="About our Sertifications" />
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col" >
                        <img src={Contacts} className="col-img" alt="Our Contacts" />
                    </div>
                    <div className="col my-auto" style={{ height: "100%" }}>
                        <ul className="mx-3" style={{ fontWeight: "bold" }}>
                            <li>Свяжитесь с нами</li>

                            <li className="my-2">Отдел продаж - 89203573793</li>
                            <li className="my-2">Отдел технологии и стандартизации - 89203440325</li>
                            <li className="my-2">Технический отдел - 89203604759</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default IndexPage;