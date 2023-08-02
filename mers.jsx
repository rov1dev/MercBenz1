import React from 'react'
import { useState } from 'react'
import im1 from "../img/img1.png"
import im2 from "../img/img2.png"
function Mers() {
    let array = [
        {
            name: 'C-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'E-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'E-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'E-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'G-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'G-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'G-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        },
        {
            name: 'G-class',
            img: 'https://image.winudf.com/v2/image1/Y29tLm1pa29rb3Npa2FwcC5nZWxpa19zY3JlZW5fMF8xNTQyODY1MTA1XzA1MA/screen-0.webp?fakeurl=1&type=.webp'
        }
    ]
    let array2 = [
        {
            icon: "fa fa-phone",
            title: "Консультация",
            about: "Наши консультанты помогут вам, выбратьмашину вашей мечты"
        },
        {
            icon: "fa fa-phone",
            title: "Цена",
            about: "Самые низкие цены по всему Узбекистану толькоу нас"
        },
        {
            icon: "fa fa-phone",
            title: "Качество",
            about: "Все автомобили проходят тест - драйвы"
        },
        {
            icon: "fa fa-phone",
            title: "Уверенность",
            about: "Вы не ошибитесь выбрав нас"
        },
        {
            icon: "fa fa-phone",
            title: "Заказ",
            about: "Мы гарантируем краткий срок на заказы"
        },
        {
            icon: "fa fa-phone",
            title: "Доставка",
            about: "Доставка любую точку Узбекистана"
        }
    ]
    const [filt, setFilt] = useState(array)
    const filters = (category) => {
        if (category == "all") {
            setFilt(array)
            return
        }
        const newitem = array.filter((menu) => menu.name == category)
        setFilt(newitem)
    }
    return (
        <>
            <div className='bg-dark text-light '>
                <div className="container d-flex justify-content-between" >
                    <div className='d-flex'>
                        <a href="">info@mercedes-benz-uzbekistan.uz</a>
                        <p>mon - fri  9:00 - 18:00 | sat 9:00 - 16:00</p>
                    </div>
                    <div className='d-flex'>
                        <p>+998 90 000 01 00
                            <span><i className='fa fa-facebook'></i>
                            </span>
                            <span>
                                <i className='fa fa-telegram'></i>
                            </span>
                            <span>
                                <i className='fa fa-instagram'></i>
                            </span>
                            <span>
                                <i className='fa fa-youtube'></i>
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <div className="navbar1 ">
                <div className='container d-flex justify-content-between align-items-center' >
                    <div>
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <div>
                        <button>Главная</button>
                        <button>О компании</button>
                        <button>Все автомобили</button>
                        <button>Магазин</button>
                        <button>Новости</button>
                        <button>Контакты    </button>
                    </div>
                </div>
            </div>
            <div className="carusel">
                <div className="change d-flex">
                    <div className="div1">
                    </div>
                    <div className="div2">
                    </div>
                </div>
            </div>
            <div className="cards1 bg-dark">
                <div className='text-light text-center'>
                    <p>Последние новости</p>
                    <h1>Не пропустите горячие акции</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className='w-100' src="https://www.afisha.uz/uploads/media/2022/04/0738582.jpeg" alt="" />
                            <div className='bg-light'>
                                <div className='row main text-center border-bottom'>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-calendar-days'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-eye'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 '>
                                        <i className='fa fa-share-nodes'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5>
                                        Представлен электрический кроссовер Mercedes-Benz <br />EQE SUV
                                    </h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className='w-100' src="https://www.afisha.uz/uploads/media/2022/04/0738582.jpeg" alt="" />
                            <div className='bg-light'>
                                <div className='row main text-center border-bottom'>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-calendar-days'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-eye'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 '>
                                        <i className='fa fa-share-nodes'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5>
                                        Представлен электрический кроссовер Mercedes-Benz <br />EQE SUV
                                    </h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className='w-100' src="https://www.afisha.uz/uploads/media/2022/04/0738582.jpeg" alt="" />
                            <div className='bg-light'>
                                <div className='row main text-center border-bottom'>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-calendar-days'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-eye'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 '>
                                        <i className='fa fa-share-nodes'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5>
                                        Представлен электрический кроссовер Mercedes-Benz <br />EQE SUV
                                    </h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className='w-100' src="https://www.afisha.uz/uploads/media/2022/04/0738582.jpeg" alt="" />
                            <div className='bg-light'>
                                <div className='row main text-center border-bottom'>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-calendar-days'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 border-end'>
                                        <i className='fa fa-eye'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                    <div className='col-4 '>
                                        <i className='fa fa-share-nodes'></i>
                                        <p>17.Окт.2022</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5>
                                        Представлен электрический кроссовер Mercedes-Benz <br />EQE SUV
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content bg-dark text-light" >
                <div className="container">
                    <div className='text-center'>
                        <p>О компании</p>
                        <h1>Получайте лучший сервис от официального дилерского <br />
                            центраx</h1>
                    </div>
                    <div style={{ margin: "0 auto", width: "70%" }}>
                        <p>Официальный дилерский центр имеет в своем распоряжении просторный демонстрационный зал. Стильный и лаконичный дизайн
                            подчеркивает атмосферу роскоши и помогает сконцентрироваться на мощных автомобилях Mercedes-Benz. Кроме того, «Автоцентр в
                            Коканде» оборудован складом оригинальных запасных частей и авторизованным отделением сервисного обслуживания для
                            гарантийного и послегарантийного ремонта.</p>
                        <p>Еще одной особенностью нашего автосалона является высококвалифицированная команда. В работе с клиентами мы руководствуемся
                            принципами честности, открытости и ответственности. Все сотрудники, будь то менеджер или автослесарь, имеют успешный
                            профессиональный опыт и большой спектр специальных знаний.</p>
                        <p>Благодаря строгому отбору и постоянному обучению, наши специалисты соответствуют высоким стандартам марки Mercedes-Benz, что
                            позволяет обеспечить премиальный сервис. В нашем автосалоне в дополнение к превосходному качеству автомобилей Вы получите
                            внимательное отношение ко всем Вашим пожеланиям.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{ marginTop: "-150px" }}>
                    <div>
                        <img src={im1} alt="" />
                    </div>
                    <div style={{ paddingTop: '300px', textAlign: "center" }}>
                        <h5>Есть вопросы? Звоните прямо сейчас!</h5>
                        <h4>+998 90 000 01 00</h4>
                    </div>
                    <div>
                        <img src={im2} alt="" />
                    </div>
                </div>
            </div>
            <div className='text-center bg-dark text-light'>
                <p>Наши автомобили</p>
                <h3>Машины вашей мечты</h3>

                <div className="footer text-center">
                    <div className="fil-btn mt-5">
                        <button onClick={() => filters("all")}>All</button>
                        <button onClick={() => filters("C-class")}>C-class</button>
                        <button onClick={() => filters("E-class")}>E-class</button>
                        <button onClick={() => filters("G-class")}>G-class</button>
                    </div>
                    <div className="cardsDiv d-flex mt-5" style={{ flexWrap: "wrap" }}>
                        {filt.map(item =>
                            <div style={{ width: "20%" }}>
                                <img className='w-100' src={item.img} alt="" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="container mt-5 ">
                    <div className="row ">
                        {array2.map(item1 =>
                            <div className="ftCard col-lg-4 text-center  mt-5">
                                <button className='mt-4'><i className={item1.icon}></i></button>
                                <h4 className='pt-5'>{item1.title}</h4>
                                <p className='pb-5'>{item1.about}</p>
                            </div>
                        )}

                    </div>
                </div>
                <div className="d-flex ftcardsMain">
                    <div className=" ft-card1" >
                        <h4>Магазин</h4>
                        <h6>Наш официальный дилерский магазин</h6>
                        <button>Посмотреть </button>
                    </div>
                    <div className=" ft-card2" >
                        <h4>Тест драйв</h4>
                        <h6>Хотите потестить автомобиль, тест драйв к вашим услугам</h6>
                        <button>Записаться </button>
                    </div>
                    <div className="ft-card3" >
                        <h4>Аксессуары</h4>
                        <h6>Мы предлагаем вам наши аксессуары</h6>
                        <button>Посмотреть </button>
                    </div>
                </div>
                <div className="container">

                </div>
            </div>

        </>
    )
}

export default Mers