import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar({setLogin}) {
  return (
    <>
        <nav>
            <div className="container flex justify-between items-center">

                <NavLink to={"/"} className='cursor-pointer'>
                    <img src="/public/images/logo.png" alt="" />
                </NavLink>
                <ul className='flex justify-center gap-10 text-sm font-semibold'>
                    <li><NavLink to={"/howPage"}>Как покупать</NavLink></li>
                    <li><NavLink to={"/sales"}>Распродажи</NavLink></li>
                    <li><NavLink to={"/price"}>Цены</NavLink></li>
                    <li><NavLink to={"/answer"}>Помощь</NavLink></li>
                    <li><NavLink to={"/bonuses"}>Бонусы</NavLink></li>
                    <li><NavLink to={"/blog"}>Блог</NavLink></li>
                    <li><NavLink to={"/popular"}>Магазины</NavLink></li>
                </ul>
                <div className='flex justify-center'>
                    <a onClick={(()=>{
                        setLogin(true)
                    })} href="#" className='flex items-center gap-3 '>
                        <FaRegUser className='text-xl'/>
                        Вход
                    </a>
                    <a href="#" className=' ml-8 px-8 py-4 bg-green-500 rounded-2xl text-white'>
                        Связаться с нами
                    </a>
                </div>
            </div>
        </nav>

        
    </>
  )
}

export default Navbar