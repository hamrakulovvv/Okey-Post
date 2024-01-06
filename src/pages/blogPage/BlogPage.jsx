import React from 'react'
import { CiClock1 } from "react-icons/ci";

function BlogPage() {
  return (
    <>
      <div className="container flex justify-between flex-wrap">
          <div className='card w-auto'>
              <div>
                <img src="./public/images/blog1.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Интернет-магазин Urban <br /> Outfitters в UK: обзор</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto'>
              <div>
                <img src="./public/images/blog2.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Брендовые товары <br /> по доступным ценам</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto'>
              <div>
                <img src="./public/images/blog3.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Брендовые товары <br /> по доступным ценам</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto py-5'>
              <div>
                <img src="./public/images/blog4.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>16 лучших подарков с Амазона <br /> в 2021 году</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto py-5'>
              <div>
                <img src="./public/images/blog5.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Target — семейный супермаркет <br /> с ценами от 300 рублей!</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto py-5'>
              <div>
                <img src="./public/images/blog6.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Английский магазин RIPNDIP. <br /> Покупаем самовыражение</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto py-5'>
              <div>
                <img src="./public/images/blog7.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Nautica. Элитные товары из <br /> Англии по низким ценам</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto py-5'>
              <div>
                <img src="./public/images/blog8.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Forever 21 - покупаем джинсы <br /> за 1 500 рублей</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto'>
              <div>
                <img src="./public/images/blog9.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Как купить кроссовки Balenciaga <br /> на 30 000 рублей дешевле?</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
              </div>
          </div>

          <div className='card w-auto'>
              <div>
                <img src="./public/images/blog10.png" alt="" />
              </div>
              <h1 className='text-black text-2xl font-extrabold p-5'>Топ-7 самых дорогих сумок <br /> Louis Vuitton</h1>
              <div className='text-gray-500 flex justify-between p-5'>
                  <span>22.10.2021</span>
                  <p className='flex items-center gap-5'> <CiClock1 /> Читать: 8 минут</p>
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
    </>
  )
}

export default BlogPage