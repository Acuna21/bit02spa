import '../styles/RecoverAccount.css';
import privado from '../assets/privado.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from './Modal';

export const RecoverAccount = () => {

    const listUsers = JSON.parse(localStorage.getItem('listUsers'));

    const navigate = useNavigate();

    const [pageState, setPageState] = useState(1)
    const [credentials, setCredentials] = useState({ user:'', newPassword: '' })
    const [isOpen, setIsOpen] = useState(false);

    const inputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name] : e.target.value})
    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const accept = (e) => {
        e.preventDefault();
        if (pageState === 1) {
            if (!credentials.user) {
                alert('Ingrese un email.');
                return;
            }
            const userFound = listUsers.find( user => user.user === credentials.user)
            console.log(pageState,' : ',userFound);
            console.log('Credentials: ',credentials);
            if (!userFound) {
                alert('Su usuario no existe. Cree una cuenta.')
                return;
            }
            setPageState(2);
        }
        if (pageState === 2) {
            if (!credentials.newPassword) {
                alert('Ingrese una contraseña.');
                return;
            }
            const userFound = listUsers.find( user => user.user === credentials.user)
            userFound.password = credentials.newPassword
            localStorage.setItem('listUsers', JSON.stringify(listUsers));
            alert('Contraseña cambiada exitosamente.');
            navigate('/bit02spa/login');
        }
    }


  return (
    <div className="recover-account">
        <header>
                <h2 className="title-account"> Recupera tu cuenta</h2>
            </header>
            
        <div className="information">
            
                <div className="title-secundary">
                    <img src={privado} alt="Seguridad" />
                    <h2 className="text-color">¿Tienes problemas para iniciar sesión?</h2>
                </div>
        
                <div className="info-account">
                    <p className="descrip-required">
                        {pageState === 1 ? 'Ingresa tu correo electrónico para poder reconocerte.' : 'Ingrese su nueva contraseña'}
                    </p>
            
                    <form action="/enviar" className="form-recover-account">

                        {pageState === 1 && <input type="email" id="email-recover" name="user" onChange={inputChange} placeholder="Correo electrónico" required />}

                        {pageState === 2 && <input type="password" name="newPassword" onChange={inputChange} placeholder="Nueva contraseña" required />}
                        <br />

                        <input type="submit" value="Aceptar" onClick={accept} className="button-send new-link" />
                    </form>
        
                    <div className="option-login">

                        <button className="gocreate-account text-color defect" onClick={openModal}><strong><span className='redirect'>Crear cuenta</span></strong></button>
        
                        <p>o</p>
        
                        <button className="gologin text-color defect">
                        <strong> <Link className='redirect' to="/bit02spa/login" >Inicio de sesión</Link></strong>
                        </button>
                    </div>
                </div>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}