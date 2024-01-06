import React from 'react'

function MainFirst() {
  return (
    <>
        <section className='py-10'>
            <div className="container">
                <div>
                    <h1 className='text-4xl font-bold'>Насколько выгодно <br /> покупать?</h1>
                </div>

                <div className='flex justify-between items-center py-10'>
                    <div className='cursor-pointer'>
                        <img src="./public/images/arrowLeft.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/wear1.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/wear2.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/wear3.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/wear4.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/wear5.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/wear6.png" alt="" />
                    </div>
                    <div className='cursor-pointer'>
                        <img src="./public/images/arrowRight.png" alt="" />
                    </div>
                </div>

                <div className='pt-5 flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Columbia Barlow Pass 550 <br />Turbodown Jacket</h1>
                        <div className='flex items-center gap-6 py-7'>
                            <div>
                            <img src="./public/images/rusFlag.png" alt="" />
                            </div>
                            <div>
                                <span className='text-sm'>Цена в России</span> <br />
                                <b className='font-bold'>7891,46₽</b>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="./public/images/img1.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Доставка одежды из <br /> Великобритании  от <span className='text-green-500'>£7.79</span></h1>
                        <div className='flex items-center gap-6 py-7'>
                            <div>
                            <img src="./public/images/ukFlag.png" alt="" />
                            </div>
                            <div>
                                <span className='text-sm'>Цена в России</span> <br />
                                <b className='font-bold text-green-500'>£80.62</b>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex items-center gap-7'>
                        <div>
                            <img src="./public/images/tshort.png" alt="" />
                        </div>
                        <div>
                            <img src="./public/images/arrowLeft.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-gray-500 text-lg'>Срок доставки примерно 10 дней</h2>
                        <h1 className='text-2xl font-bold'>Вы экономите до <span className='text-green-500'>$119.56</span></h1>
                    </div>
                    <div className='flex items-center gap-7 pb-10'>
                        <div className=''>
                            <img src="./public/images/arrowRight.png" alt="" />
                        </div>
                        <div>
                            <img src="./public/images/jins.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-14 py-10'>
                    <div className='flex items-center gap-4 w-60'>
                            <div>
                                <img src="./public/images/icon1.png" alt="" />
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>Экономия <br /> до 70%</p>
                            </div>
                    </div>
                    <div className='flex items-center gap-4 w-60'>
                            <div>
                                <img src="./public/images/icon2.png" alt="" />
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>Только подлинная <br /> продукция</p>
                            </div>
                    </div>
                    <div className='flex items-center gap-4 w-60'>
                            <div>
                                <img src="./public/images/icon3.png" alt="" />
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>Оперативная <br /> доставка</p>
                            </div>
                    </div>
                    <div className='flex items-center gap-4 w-60'>
                            <div>
                                <img src="./public/images/icon4.png" alt="" />
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>Огромный <br />выбор товаров</p>
                            </div>
                    </div>
                </div>

            </div>
        </section>
        <section className='h-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-5'>
            <div className="container flex justify-center items-center gap-20 py-5">
                <div>
                    <img src="./public/images/item1.png" alt="" />
                </div>
                <div className='flex-col'>
                    <h1 className='text-3xl text-white'>Поручите нашим мастерам шопинга оформить <br /> заказы в английских магазинах и освободите время <br />для более важных дел.</h1> <br />
                    <span className='text-white text-lg'>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</span> <br />
                    <a href="#" className='px-12 py-4 bg-green-500 rounded-2xl text-white mt-10 inline-block'>Попробовать</a>
                </div>
            </div>
        </section>
        <section>
            <div className="container py-20">
                <div className=''>
                    <h1 className='text-4xl font-extrabold'>OkeyPost удобная и быстрая доставка <br /> посылок из Великобритании </h1>
                    <p className='text-xl py-8 font-light'>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши <br /> посылки на складе, при необходимости объединим несколько доставок в одну <br /> и отправим их к вам надежно упакованными.</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <img src="./public/images/imgs1.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/imgs2.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/imgs3.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/imgs4.png" alt="" />
                    </div>
                    <div>
                        <img src="./public/images/imgs5.png" alt="" />
                    </div>
                </div>
                <a href="#" className=' bg-green-500 py-8 px-20 rounded-3xl mt-10 inline-block text-white'>Рассчитать</a>
            </div>
        </section>
        <section>
            <div className="container py-10">
                <div>
                    <h1 className='text-3xl font-bold'>Варианты доставки:</h1>
                </div>
                <div className='cards'>

                    <div className='py-10 flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <img src="./public/images/i1.png" alt="" />
                            <b>Почта России</b>
                        </div>
                        <div className='flex gap-14 items-center'>
                            <div className=''>
                                <span>Сроки:</span><br />
                                <b>10-14 дней</b>
                            </div>
                            <div className='w-40'>
                                <span>Стоимость доставки:</span><br />
                                <b>от £27.00</b>
                            </div>
                            <div className=''>
                                <span>Итого:</span><br />
                                <b>£41.99</b>
                            </div>
                            <div>
                                <img src="./public/images/gal.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='py-10 flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <img src="./public/images/i2.png" alt="" />
                            <b>EMS ПОЧТА РОССИЯ</b>
                        </div>
                        <div className='flex gap-14 items-center'>
                            <div className=''>
                                <span>Сроки:</span><br />
                                <b>9-12 дней</b>
                            </div>
                            <div className='w-40'>
                                <span>Стоимость доставки:</span><br />
                                <b>от £40.00</b>
                            </div>
                            <div className=''>
                                <span>Итого:</span><br />
                                <b>£54.55</b>
                            </div>
                            <div>
                                <img src="./public/images/gal.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='py-10 flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <img src="./public/images/i2.png" alt="" />
                            <b>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</b>
                        </div>
                        <div className='flex gap-14 items-center'>
                            <div className=''>
                                <span>Сроки:</span><br />
                                <b>9-12 дней</b>
                            </div>
                            <div className='w-40'>
                                <span>Стоимость доставки:</span><br />
                                <b>от £13.00</b>
                            </div>
                            <div className=''>
                                <span>Итого:</span><br />
                                <b>£90.50</b>
                            </div>
                            <div>
                                <img src="./public/images/gal.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section>
            <div className="container py-10">

                <div>
                    <h1 className='text-3xl font-extrabold'>4 простых шага для ваших <br /> покупок в Великобритании </h1>
                </div>

                <div className='flex justify-between items-center py-10'>
                    <div className='py-5'>
                        <div>
                            <img src="./public/images/iitem1.png" alt="" />
                        </div>
                        <div className='py-2'>
                            <h2 className='text-2xl font-bold'>ВЫ ВЫБИРАЕТЕ <br /> ТОВАР</h2>
                            <p className='text-sm'>в английском магазине, оплачиваете и <br /> <span className='text-green-500 font-light'>указываете адрес</span> склада OkeyPost</p>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div>
                            <img src="./public/images/iitem2.png" alt="" />
                        </div>
                        <div className='py-2'>
                            <h2 className='text-2xl font-bold'>ВЫ ВЫБИРАЕТЕ <br /> ТОВАР</h2>
                            <p className='text-sm'>в английском магазине, оплачиваете и <br /> <span className='text-green-500 font-light'>указываете адрес</span> склада OkeyPost</p>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div>
                            <img src="./public/images/iitem3.png" alt="" />
                        </div>
                        <div className='py-2'>
                            <h2 className='text-2xl font-bold'>ВЫ ВЫБИРАЕТЕ <br /> ТОВАР</h2>
                            <p className='text-sm'>в английском магазине, оплачиваете и <br /> <span className='text-green-500 font-light'>указываете адрес</span> склада OkeyPost</p>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div>
                            <img src="./public/images/iitem4.png" alt="" />
                        </div>
                        <div className='py-2'>
                            <h2 className='text-2xl font-bold'>ВЫ ВЫБИРАЕТЕ <br /> ТОВАР</h2>
                            <p className='text-sm'>в английском магазине, оплачиваете и <br /> <span className='text-green-500 font-light'>указываете адрес</span> склада OkeyPost</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-lg font-light'>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью <br /> купят все товары за вас.</p>
                    <a href="#" className='px-10 py-4 bg-green-500 text-white mt-5 inline-block rounded-xl'>Быстрая покупка</a>
                </div>

            </div>
        </section>
        <section className='w-full bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className="container flex justify-center py-5 items-center gap-20">
                <div>
                    <img src="./public/images/iiitem3.png" alt="" />
                </div>
                <div className='text-white'>
                    <h1 className='text-4xl font-extrabold'>Виртуальный тур по нашему складу <br /> в реальном времени</h1>
                    <h2 className='text-lg py-5'>Вы можете всегда посмотреть на нашу слаженую работу на складе</h2>
                    <a href="#" className='px-10 py-4 bg-green-500 text-white mt-5 inline-block rounded-xl'>Попробовать</a>
                </div>
            </div>
        </section>
        <section>
            <div className="container py-10">
                <div>
                    <h1 className='text-3xl font-extrabold mt-10'>120 000 довольных клиентов в России <br /> уже сделали свой выбор</h1>
                    <p className='text-lg font-light py-5'>За последний год десятки тысяч наших клиентов заказали <br />товары из Англии и оставили 19 633 отзыва</p>
                </div>
                <div className='py-5 flex justify-between'>
                    <div>
                        <img src="./public/images/iic1.png" alt="" />
                        <b className='font-bold mt-5 inline-block'>Больше не значит дороже</b>
                        <p className='text-sm font-light'>С ростом веса посылки цена за каждые 0.5 кг <br />уменьшается в прогрессии.</p>
                    </div>

                    <div>
                        <img src="./public/images/iic2.png" alt="" />
                        <b className='font-bold mt-5 inline-block'>Больше не значит дороже</b>
                        <p className='text-sm font-light'>С ростом веса посылки цена за каждые 0.5 кг <br />уменьшается в прогрессии.</p>
                    </div>

                    <div>
                        <img src="./public/images/iic3.png" alt="" />
                        <b className='font-bold mt-5 inline-block'>Больше не значит дороже</b>
                        <p className='text-sm font-light'>С ростом веса посылки цена за каждые 0.5 кг <br />уменьшается в прогрессии.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container py-10">
                <h1 className='text-4xl font-extrabold pb-5'>Ваш личный адрес в Великобритании  для покупок</h1>

                <p className='text-lg font-light'>С нами вы получаете целых два адреса в UK! У нас есть два    склада для приема посылок – в Лондоне и Манчестере. Указывайте  в магазине тот из них, отправка <br /> на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и <br /> всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!
                </p> <br />
                <span className='text-lg font-light'>
                    При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение <br /> сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для <br /> снижения стоимости доставки посылок из UK в Россию.
                </span> <br />
                <p className='text-lg font-light'>
                    У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.
                </p> <br />
                <span className='text-lg font-light'>
                    Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!
                </span>
            </div>
        </section>
        <section className='w-full bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className="container text-white py-10 flex justify-between">
                <div>
                    <h1 className='text-3xl font-extrabold'>Подпишитеть и будьте в курсе <br /> всех скидок и акций магазинов <br /> Великобритании!</h1>
                </div>
                <div className='flex gap-20 items-center'>
                    <div>
                        <input type="text" placeholder='Введите ваш email' className='outline-none bg-transparent border-b-2 w-72 border-white py-3'/>
                    </div>
                    <div>
                        <a href="#" className='bg-green-500 px-12 py-3 rounded-lg'>Подписаться</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainFirst