import React from 'react'
import "./Price.css"

function PricePage() {
  return (
    <>
      <div>
          <div className="container py-20 flex justify-between items-center">

              <div className='w-72 card'>
                <img src="./public/images/price1.png" alt="" />
                <h1 className='text-2xl font-bold pt-5'>Ваш личный адрес <br /> для покупок</h1>
                <span className='font-extralight text-lg leading-9'>на нашем современном <br /> автоматизированном складе в <br />безналоговом Делавэре</span> <br />
                <a className='px-20 py-4 bg-sky-500 text-white inline-block mt-10 rounded-xl' href="#">Бесплатно</a>
              </div>

              <div className='w-72 card'>
                <img src="./public/images/price2.png" alt="" />
                <h1 className='text-2xl font-bold pt-5'>Объединение нескольких  <br />посылок в одну</h1>
                <span className='font-extralight text-lg leading-9'>ведь часто отправлять несколько <br /> посылок в одной коробке гораздо <br />выгоднее, чем по одной</span> <br />
                <a className='px-20 py-4 bg-sky-500 text-white inline-block mt-3 rounded-xl' href="#">Бесплатно</a>
              </div>

              <div className='w-72 card'>
                <img src="./public/images/price3.png" alt="" />
                <h1 className='text-2xl font-bold pt-5'>Усиленная упаковка <br /> по запросу</h1>
                <span className='font-extralight text-lg leading-9'>Мы дополнительно упакуем вашу <br /> посылку в пленку, коробку с <br />двойными стенками.</span> <br />
                <a className='px-20 py-4 bg-sky-500 text-white inline-block mt-7 rounded-xl' href="#">Бесплатно</a>
              </div>

              <div className='w-72 card'>
                <img src="./public/images/price4.png" alt="" />
                <h1 className='text-2xl font-bold pt-5'>Хранение входящих <br />посылок 30 дней</h1>
                <span className='font-extralight text-lg leading-9'>чем больше срок хранения <br /> посылок на складе – тем больше <br /> вы сможете собрать</span> <br />
                <a className='px-20 py-4 bg-sky-500 text-white inline-block mt-12 rounded-xl' href="#">Бесплатно</a>
              </div>

          </div>

          <div className="container">
            <div>
                <h1 className='text-4xl font-extrabold'>
                    Онлайн-калькулятор <br /> стоимости доставки товара
                </h1> <br />
                <p className='text-xl font-extralight leading-9'>Задайте необходимые параметры посылки, и калькулятор рассчитает <br /> приблизительную стоимость доставки вашей посылки из Англии.</p>
            </div>
            <div className='flex justify-between mt-7'>
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
                <a href="#" className=' bg-green-500 py-5 px-20 rounded-3xl mt-10 inline-block text-white mb-5'>Рассчитать</a>
          </div>

          <div className="container py-20">

                <div className='text-4xl font-extrabold'>
                    Варианты доставки: 
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

                <div className=' py-10'>
                    <h1 className='text-4xl font-extrabold'>
                        Услуги склада: 
                    </h1>

                    <div className='products flex flex-wrap justify-between leading-10'>

                        <div className='flex justify-between product pt-10'>
                            <span className='font-bold'>Консолидация </span>
                            <p className='font-bold'>£1.00/1 трек</p>
                        </div>

                        <div className='flex justify-between product pt-10'>
                            <span className='font-bold'>Заполнение декларации </span>
                            <p className='font-bold'>£1.00</p>
                        </div>

                        <div className='flex justify-between product'>
                            <span className='font-bold'>Дополнительная упаковка </span>
                            <p className='font-bold'>£5.00</p>
                        </div>

                        <div className='flex justify-between product'>
                            <span className='font-bold'>Упаковка xрупкиx предметов </span>
                            <p className='font-bold'>£10.00</p>
                        </div>

                        <div className='flex justify-between product'>
                            <span className='font-bold'>Заполнение декларации </span>
                            <p className='font-bold'>£1.00</p>
                        </div>

                        <div className='flex justify-between product'>
                            <span className='font-bold'>Разделение заказа </span>
                            <p className='font-bold'>£2.00</p>
                        </div>

                        <div className='flex productss justify-between py-4'>
                            <h1 className='font-bold'>Сборка исходящей посылки вне очереди или экспресс сборка <br /> <span className='text-gray-500'>Чтобы сэкономить время</span> </h1>
                            <p className='font-bold'>£5.00</p>
                        </div>

                        <div className='flex productss justify-between py-4'>
                            <h1 className='font-bold'>Фото содержимого входящей посылки <br /> <span className='text-gray-500'>3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат</span> </h1>
                            <p className='font-bold'>£1.00 за 1 фото</p>
                        </div>

                        <div className='flex productss justify-between py-4'>
                            <h1 className='font-bold'>Фото содержимого входящей посылки <br /> <span className='text-gray-500'>3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат</span> </h1>
                            <p className='font-bold'>£10 + почтовые расходы</p>
                        </div>

                        <div className='flex productss justify-between py-4'>
                            <h1 className='font-bold'>Фото содержимого входящей посылки <br /> <span className='text-gray-500'>3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат</span> </h1>
                            <p className='font-bold'>£10</p>
                        </div>

                        <div className='flex productss justify-between py-4'>
                            <h1 className='font-bold'>Удаление инвойса <br /> <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span> </h1>
                            <p className='font-bold'>Бесплатно</p>
                        </div>

                        <div className='flex productss justify-between py-4'>
                            <h1 className='font-bold'>Дополнительная упаковка <br /> <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span> </h1>
                            <p className='font-bold'>По договоренности</p>
                        </div>   
                    </div>
                </div>

                <div>
                    <h1 className='text-4xl font-extrabold'>Покупки с операторами Okeypost.com</h1>
                    <div className='flex justify-between'>
                        <div className='pt-5'>
                            <h1 className='text-2xl font-bold'>Быстрое оформление покупок в интернет-магазинах</h1> 
                            <p className='text-gray-500 pt-2'>Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, <br /> проконтролируют доставку на склад и сообщат, когда всё будет готово.</p>
                        </div>
                        <div className='pt-5'>
                            <b>
                                5% от стоимости товаров <br />
                                минимум £7 для каждого магазина <br />
                                Но не менее £7 для каждого лота eBay
                            </b>
                        </div>
                    </div>

                    <div className='flex justify-between py-10'>
                        <div className='pt-5'>
                            <h1 className='text-2xl font-bold'>Фото товара по услуге "Покупка с операторами"</h1> 
                            <p className='text-gray-500 pt-2'>Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"</p>
                        </div>
                        <div className='pt-5'>
                            <b>
                                £2
                            </b>
                        </div>
                    </div>
                </div>


          </div>
      </div>
    </>
  )
}

export default PricePage