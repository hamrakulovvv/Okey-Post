import React from 'react'

function HeroFirst() {
  return (
    <>
        <div className='h-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-5'>
            <div className="container py-14 flex justify-between items-center">
                <div>
                    <h1 className='text-5xl text-white font-semibold'>Доставка товаров <br /> из Великобритании <br /> в Россию</h1>
                    <p className='font-light text-white text-xl leading-10 py-4'>    
                        Начните экономить до 80% на шопинге. Регистрируйтесь в      OkeyPost, <br /> чтобы покупать со скидками в UK одежду, обувь, гаджеты известных <br /> брендов и безопасно отправлять вещи в Россию.
                    </p>
                    <a href="#" className='px-8 py-4 bg-green-500 rounded-2xl text-white inline-block mt-7'>
                        Получить адрес в UK
                    </a>
                </div>

                <div>
                    <img src="public/images/hero.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroFirst