import React from 'react'

function HowPage() {
  return (
    <>
        <section>
            <div className="container text-black py-10">

                <h1 className='text-4xl font-extrabold'>Покупать в Великобритании очень просто</h1>

                <h3 className='text-lg font-extralight leading-9 py-5'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать <br /> по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и <br /> отправим их к вам домой.</h3>

                <div className='py-20 flex-col items-center'>

                    <div className='flex justify-center gap-40'>
                        <div>
                            <img src="./public/images/secondPage1.png" alt="" />
                        </div>
                        <div>

                            <div className='text-2xl font-bold flex gap-14 items-center'>
                                <h1 className='text-green-500 text-6xl'>01</h1>
                                <h1 className='leading-9'>Получаем адрес для покупок <br /> в магазинах Великобритании </h1>
                            </div>

                            <p className='pt-10 leading-9'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем <br /> сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при <br /> оформлении заказов в интернет-магазинах.</p>
                        
                        </div>
                    </div>

                    <div className='flex justify-center gap-40'>
                        <div>
                            <img src="./public/images/secondPage2.png" alt="" />
                        </div>
                        <div>

                            <div className='text-2xl font-bold flex gap-14 items-center'>
                                <h1 className='text-green-500 text-6xl'>02</h1>
                                <h1 className='leading-9'>Идём за покупками в <br /> онлайн-магазины</h1>
                            </div>

                            <p className='pt-10 leading-9'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем <br /> сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при <br /> оформлении заказов в интернет-магазинах.</p>
                        
                        </div>
                    </div>

                    <div className='flex justify-center gap-40'>
                        <div>
                            <img src="./public/images/secondPage3.png" alt="" />
                        </div>
                        <div>

                            <div className='text-2xl font-bold flex gap-14 items-center'>
                                <h1 className='text-green-500 text-6xl'>03</h1>
                                <h1 className='leading-9'>Следим за перемещением <br /> посылки до склада</h1>
                            </div>

                            <p className='pt-10 leading-9'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем <br /> сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при <br /> оформлении заказов в интернет-магазинах.</p>
                        
                        </div>
                    </div>

                    <div className='flex justify-center gap-40'>
                        <div>
                            <img src="./public/images/secondPage4.png" alt="" />
                        </div>
                        <div>

                            <div className='text-2xl font-bold flex gap-14 items-center'>
                                <h1 className='text-green-500 text-6xl'>04</h1>
                                <h1 className='leading-9'>Оплачиваем доставку и покупки <br /> отправляются домой</h1>
                            </div>

                            <p className='pt-10 leading-9'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем <br /> сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при <br /> оформлении заказов в интернет-магазинах.</p>
                        
                        </div>
                    </div>

                    <div className='flex justify-center gap-40'>
                        <div>
                            <img src="./public/images/secondPage5.png" alt="" />
                        </div>
                        <div>

                            <div className='text-2xl font-bold flex gap-14 items-center'>
                                <h1 className='text-green-500 text-6xl'>05</h1>
                                <h1 className='leading-9'>Получаем посылку и спешим сделать новый заказ</h1>
                            </div>

                            <p className='pt-10 leading-9'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем <br /> сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при <br /> оформлении заказов в интернет-магазинах.</p>
                        
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-5'>
                        <a href="#" className='px-14 py-5 rounded-2xl bg-green-500 text-white  '>Получить адрес в UK</a>
                    </div>

                </div>

            </div>

            <div className='w-full bg-gradient-to-r from-sky-500 to-indigo-500'>
                    <div className="container text-white flex justify-between items-center py-14">
                        
                        <div className='text-4xl'>
                            Остались вопросы? Спросите нас в соцсетях!
                        </div>

                        <div className='flex gap-5 cursor-pointer'>
                            <div><img src="./public/images/wats2.png" alt="" /></div>
                            <div><img src="./public/images/vibe2.png" alt="" /></div>
                            <div><img src="./public/images/chat2.png" alt="" /></div>
                        </div>

                    </div>
            </div>

        </section>
    </>
  )
}

export default HowPage