import { useState } from 'react';
import '../styles/Login.css'
import { Modal } from './Modal'
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const listUsers = JSON.parse(localStorage.getItem('listUsers'));
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({
        user:'',
        password:''
    });
    const [userError, setUserError] = useState({
        user:'',
        password:''
    })

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const inputChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const login = (e) => {
        setUserError({
            user:undefined,
            password:undefined
        })
        e.preventDefault();
        if (!user.user) {
            setUserError({
                user:'Los datos que ingreso son incorrectos. Por favor, verifique su cuenta o cree una nueva'
            })
            return;
        }
        const userFound = listUsers.find( account => account.user === user.user )
        if ( !userFound ){
            setUserError({
                user:'Los datos que ingreso son incorrectos. Por favor, verifique su cuenta o cree una nueva'
            })
            return;
        }
        if(userFound.password !== user.password){
            setUserError({
                password: 'Contraseña incorrecta. Vuelve a intentarlo o selecciona ¿Olvidaste tu contraseña?'
            })
            return;
        }
        localStorage.setItem('token', JSON.stringify({email: user.user}));
        navigate('/bit02spa/main-study');
    }

  return (
    <main className="info-login">
        <div className="title-login">
            <h2 className="text-color">¡Es hora de aprender!</h2>
        </div>

        <form className="login-form" id="formLogin">
            <label htmlFor="user"></label>
            <input type="text" onChange={inputChange} value={user.user} id="user" name="user" placeholder="Correo electrónico" className="input-login" />
            <p id="alertUser" className="valid">{userError.user}</p>

            <label htmlFor="password"></label>
            <input type="password" onChange={inputChange} value={user.password} id="password-login" name="password" placeholder="Contraseña" className="input-login" />
            <p id="alertPassword" className="valid">{userError.password}</p>

            <p className="exitLogin" id=" loginMessage"></p>

            <button type="submit" onClick={login} className="button-send" id="sub">Iniciar sesión</button>
        </form>

        <div className="option-login">
            <span className="text-color defect"><a href="recover-account.html" className="text-color">¿Olvidaste tu contraseña?</a></span>

            <p className="open-modal text-color" onClick={openModal}> 
                ¿No tienes una cuenta? <strong>Registrate</strong>
            </p>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} />
    </main>
  )
}