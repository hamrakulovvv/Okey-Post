import React from 'react'
import "./form.css"
import { AiOutlineFullscreenExit } from "react-icons/ai";

function Login({setLogin}) {
  return (
    <>
        <div className='login_form'>
            <div onClick={(()=>{
                setLogin(false)
            })}>
                <AiOutlineFullscreenExit />
            </div>
            <div className='login p-14'>
                <div>
                    <h1 className='font-bold text-xl'>Выполните вход в ваш <br /> личный кабинет </h1>
                </div>

                <label htmlFor="" className='block py-5 text-base font-bold'>
                    Номер телефона: <br />
                    <input className='border border-gray-500 mt-2 w-full p-3 rounded-md outline-none' type="text" placeholder='' />
                </label>

                <label htmlFor="" className='block text-base font-bold'>
                    Ваш email:: <br />
                    <input className='border border-gray-500 mt-2 w-full p-3 rounded-md outline-none' type="text" placeholder='' />
                </label>

                <label htmlFor="" className='block py-5 text-base font-bold'>
                    Ваш пароль:: <br />
                    <input className='border border-gray-500 mt-2 w-full p-3 rounded-md outline-none' type="text" placeholder='' />
                </label>

                <div>
                    <p>
                        <span className='text-green-500'>Восстановление пароля</span> или <span className='text-green-500'>быстрая регистрация</span>
                    </p>

                    <div className='flex justify-between items-center'>
                        <div>
                            <a href="#" className='px-16 py-4 bg-green-500 text-white rounded-xl mt-5 inline-block'>Войти</a>
                        </div>
                        <div className='flex gap-1 pt-5'>
                            <div>
                                <img src="./public/images/google.png" alt="" />
                            </div>
                            <div>
                                <img src="./public/images/face.png" alt="" />
                            </div>
                            <div>
                                <img src="./public/images/vk.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login