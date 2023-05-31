import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav, NotFound } from './components'
import { Home } from './components/Home'
import './App.css'
import { Learn } from './components/Learn';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { MainStudy } from './components/MainStudy';
import { PrivateRoute } from './components/PrivateRoute';

function App() {

  const listUsers = [
    {
      name: "Sara",
      user:"sara@gmail.com",
      password: "sara123",
      phone: "3007302949",
    },
    {
      name: "Acuna",
      user:"acunabenavides@hotmail.com",
      password: "acuna123",
      phone: "3007302000",
    },
    {
      name: "Prueba",
      user:"123@gmail.com",
      password: "123",
      phone: "3007302001",
    }
  ];

  localStorage.setItem('listUsers', JSON.stringify(listUsers));
  const baseUrl = '/bit02spa/';

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path={baseUrl} element={<Home />}></Route>
        <Route path={baseUrl+'aprender'} element={<Learn />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path={baseUrl+'main-study'} element={<MainStudy />} />
        </Route>
        <Route path={baseUrl+'login'} element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
