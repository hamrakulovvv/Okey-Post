import React from 'react'

function BonusPage() {
  return (
    <>
        <div>
            <div className="container">
                <div className='py-10'>
                    <h1 className='text-4xl font-bold'>Зарабатывать с нами — проще простого:</h1>
                </div>

                <div className='products py-10 flex justify-between flex-wrap gap-10'>
                    <div className='product'>
                        <img src="./images/bonus1.png" alt="" />
                        <h2 className='text-lg font-bold py-4'>Дарим скидку 10% вашим друзьям и подписчикам</h2>
                        <p className='text-gray-500'>На их первую отправленную посылку. Вам есть чем <br />мотивировать зарегистрироваться именно по вашему <br />реферальному коду или ссылке.</p>
                    </div>

                    <div className='product'>
                        <img src="./images/bonus2.png" alt="" />
                        <h2 className='text-lg font-bold py-4'>Дарим скидку 10% вашим друзьям и подписчикам</h2>
                        <p className='text-gray-500'>На их первую отправленную посылку. Вам есть чем <br />мотивировать зарегистрироваться именно по вашему <br />реферальному коду или ссылке.</p>
                    </div>

                    <div className='product'>
                        <img src="./images/bonus3.png" alt="" />
                        <h2 className='text-lg font-bold py-4'>Дарим скидку 10% вашим друзьям и подписчикам</h2>
                        <p className='text-gray-500'>На их первую отправленную посылку. Вам есть чем <br />мотивировать зарегистрироваться именно по вашему <br />реферальному коду или ссылке.</p>
                    </div>

                    <div className='product'>
                        <img src="./images/bonus4.png" alt="" />
                        <h2 className='text-lg font-bold py-4'>Дарим скидку 10% вашим друзьям и подписчикам</h2>
                        <p className='text-gray-500'>На их первую отправленную посылку. Вам есть чем <br />мотивировать зарегистрироваться именно по вашему <br />реферальному коду или ссылке.</p>
                    </div>

                    
                        <div className=''>
                        <img src="./images/bonus5.png" alt="" />
                        <h2 className='text-lg font-bold py-4'>Дарим скидку 10% вашим друзьям и подписчикам</h2>
                        <p className='text-gray-500'>На их первую отправленную посылку. Вам есть чем <br />мотивировать зарегистрироваться именно по вашему <br />реферальному коду или ссылке.</p>
                    </div>
                    
                </div>
            </div>

            <div className='w-full bg-gradient-to-r from-sky-500 to-indigo-500 my-5'>
                    <div className="container text-white flex justify-between items-center py-14">
                        
                        <div className='text-4xl'>
                            Остались вопросы? Спросите нас в соцсетях!
                        </div>

                        <div className='flex gap-5 cursor-pointer'>
                            <div><img src="./images/wats2.png" alt="" /></div>
                            <div><img src="./images/vibe2.png" alt="" /></div>
                            <div><img src="./images/chat2.png" alt="" /></div>
                        </div>

                    </div>
            </div>
        </div>
    </>
  )
}

export default BonusPage