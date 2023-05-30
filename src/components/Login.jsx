import { useState } from 'react';
import '../styles/Login.css'
import { Modal } from './Modal'


export const Login = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

  return (
    <main className="info-login">
        <div className="title-login">
            <h2 className="text-color">¡Es hora de aprender!</h2>
        </div>

        <form className="login-form" id="formLogin">
            <label htmlFor="user"></label>
            <input type="text" id="user" name="user" placeholder="Correo electrónico, télefono o usuario" className="input-login" />
            <p id="alertUser" className="valid"></p>

            <label htmlFor="password"></label>
            <input type="password" id="password-login" name="password" placeholder="Contraseña" className="input-login" />
            <p id="alertPassword" className="valid"></p>

            <p className="exitLogin" id=" loginMessage"></p>

            <button type="submit" className="button-send" id="sub">Iniciar sesión</button>
        </form>

        <div className="option-login">
            <span className="text-color defect"><a href="recover-account.html" target="_blank" className="text-color">¿Olvidaste tu contraseña?</a></span>

            <p className="open-modal text-color" onClick={openModal}> 
                ¿No tienes una cuenta? <strong>Registrate</strong>
            </p>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} />
    </main>
  )
}