import React from 'react'

function Footer() {
  return (
    <>
        <footer className='pt-10'>

            <div className="container flex justify-between">
                <div>
                    <img src="./public/images/logo.png" alt="" /> <br />
                    <div className='flex gap-4'>
                        <img src="./public/images/wats.png" alt="" />
                        <img src="./public/images/vibe.png" alt="" />
                        <img src="./public/images/chat.png" alt="" />
                    </div>
                </div>

                <ul className='text-sm leading-7'>
                    <li className='font-bold text-lg'>О компании</li>
                    <li><a href="">Услуги</a></li>
                    <li><a href="">Цены</a></li>
                    <li><a href="">Отзывы</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Вакансии</a></li>
                    <li><a href="">Соглашение о персональных данных</a></li>
                    <li><a href="">Условия использования</a></li>
                </ul>
                <ul className='text-sm leading-7'>
                    <li className='font-bold text-lg'>Полезное</li>
                    <li><a href="">Как работает наш сервис</a></li>
                    <li><a href="">Как покупать с оператором</a></li>
                    <li><a href="">Ответы на частые вопросы</a></li>
                    <li><a href="">Популярные магазины</a></li>
                    <li><a href="">Черный список магазинов</a></li>
                    <li><a href="">Актуальные распродажи</a></li>
                </ul>
                <ul className='text-sm leading-7'>
                    <li className='font-bold text-lg'>Спецпроекты</li>
                    <li><a href="">50% на первую доставку</a></li>
                    <li><a href="">Скидки для постоянных клиентов</a></li>
                    <li><a href="">Реферальная программа</a></li>
                    <li><a href="">Кэшбек Mr. Rebates и Rakuten</a></li>
                    <li><a href="">Stop Fraud</a></li>
                </ul>

            </div>

            <div className='py-10'>
                <h1 className='text-sm text-center border-t-2 border-black py-10'>© 2021 Okeypost . Все права защищены.</h1>
            </div>
        </footer>
    </>
  )
}

export default Footer