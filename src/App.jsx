import './App.css'
import MainFirst from './components/firstmain/MainFirst'
import Footer from './components/footer/Footer'
import HeroFirst from './components/hero/HeroFirst'
import Navbar from './components/nav/Navbar'
import HowHero from './pages/howpage/HowHero'
import HowPage from './pages/howpage/HowPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SalesHero from './pages/sales/SalesHero'
import SalesPage from './pages/sales/SalesPage'
import BlogHero from './pages/blogPage/BlogHero'
import BlogPage from './pages/blogPage/BlogPage'
import PopularHero from './pages/popular/PopularHero'
import PopularPage from './pages/popular/PopularPage'
import PriceHero from './pages/pricePage/PriceHero'
import PricePage from './pages/pricePage/PricePage'
import AnswerHero from './pages/answer/AnswerHero'
import AnswerPage from './pages/answer/AnswerPage'
import BonusPage from './pages/bonusPage/BonusPage'
import BonusHero from './pages/bonusPage/BonusHero'
import Login from './components/forms/Login'
import { useState } from 'react'

function App() {

  const [ login , setLogin ] = useState(false)
  

  return (
    <>
      <BrowserRouter>

          {login && <Login setLogin={setLogin} />}

          <header>
            <Navbar setLogin={setLogin} />
            <Routes>
              <Route path='/' element={<HeroFirst />} />
              <Route path='/howPage' element={<HowHero />} />
              <Route path='/sales' element={<SalesHero />} />
              <Route path='/blog' element={<BlogHero />} />
              <Route path='/popular' element={<PopularHero />} />
              <Route path='/price' element={<PriceHero />} />
              <Route path='/answer' element={<AnswerHero />} />
              <Route path='/bonuses' element={<BonusHero />} />
            </Routes>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<MainFirst/>} />
              <Route path='/howPage' element={<HowPage/>} /> 
              <Route path='/sales' element={<SalesPage />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/popular' element={<PopularPage />} />
              <Route path='/price' element={<PricePage />} />
              <Route path='/answer' element={<AnswerPage />} />
              <Route path='/bonuses' element={<BonusPage />} />
            </Routes>
          </main>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
