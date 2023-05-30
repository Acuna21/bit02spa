import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav, NotFound } from './components'
import { Home } from './components/Home'
import './App.css'
import { Learn } from './components/Learn';
import { Login } from './components/Login';
import { Footer } from './components/Footer';

function App() {

  const baseUrl = '/bit02spa/';

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path={baseUrl} element={<Home />}></Route>
        <Route path={baseUrl+'aprender'} element={<Learn />}></Route>
        <Route path={baseUrl+'aprender'} element={<Learn />}></Route>
        <Route path={baseUrl+'login'} element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
