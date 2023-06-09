import { useState } from "react";
import '../styles/Nav.css'
import logo2 from '../assets/logo2.png'
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Dropdown } from "./Dropdown";

export const Nav = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('token');

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const baseUrl = "/bit02spa";
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

  return (
    <nav>
        <div className="lema">
            <Link to={baseUrl}><img src={logo2} className="logo" /></Link>
        </div>
        
        <div className="menu-search" >
            <form className="search-form">
                <input type="text" placeholder="Buscar para aprender" className="search-nav" value={search} onChange={handleSearch} />
                <button type="submit" className="search-button">Buscar</button>
            </form>

            <ul className="nav-menu">
                <li className="nav-option">
                    <Link to={baseUrl} className="home">Home</Link>
                </li>

                <li className="nav-option">
                    <Link to={baseUrl+"/aprender"}className="aprender" >Aprender</Link>
                </li>

                {token && (
                <>
                    <li className="nav-option">
                        <Link to={baseUrl+"/main-study"}className="aprender" >Estudios</Link>
                    </li>
                    <li>
                        <Dropdown navigate={navigate} />
                    </li>
                </>
                )}

                {!token && (
                <>
                    <li className="nav-option">
                        <Link to={baseUrl+"/login"} className="login">Acceder</Link>
                    </li>
    
                    <li className="nav-option">
                        <span onClick={openModal} className="create-account a-redi">Crear cuenta</span>
                    </li>
                </>
                )}

            </ul>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} />
    </nav>
  )
}