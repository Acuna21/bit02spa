import { useState } from 'react';
import '../styles/Modal.css'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Modal = ({ isOpen, onClose}) => {

  const navigate = useNavigate();

  const listUsers = JSON.parse(localStorage.getItem('listUsers'));

  const [newUser, setNewUser] = useState({
    name: null,
    user: null,
    phone: null,
    password: null,
    confirmedPassword: null,
  })

  const completeForm = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]:e.target.value
    });
  }

  const crearUsuario = (e) => {
    e.preventDefault();
    const {name, user, phone, password, confirmedPassword} = newUser;
    if ( !name || !user || !phone || !password || !confirmedPassword ) {
      alert('Todos los campos son obligatorios.');
      return
    }
    if (password !== confirmedPassword) {
      alert('Las contraseñas no coinciden.')
      return
    }
    listUsers.push(newUser)
    localStorage.setItem('listUsers', JSON.stringify(listUsers));
    localStorage.setItem('token', JSON.stringify({email: newUser.user}));
    clearForm();
    onClose();
    navigate('/bit02spa/main-study')
    alert('Usuario Creado Satisfactoriamente.');
  }

  const clearForm = () => {
    setNewUser({
      name: '',
      user: '',
      phone: '',
      password: '',
      confirmedPassword: '',
    })
  }

  return (
    isOpen && (
        <div id="myModal" className="container-modal">
            <div className="modal-content">
            <a className="close-modal" onClick={onClose}>&times;</a>
            <h2 className="text-color title-modal">Regístrate</h2>
        
            <form className="form-create" id="formCreateUser">
                <label htmlFor="name"></label>
                <input onChange={completeForm} type="text" id="name" name="name" placeholder="Ingresa tu nombre completo" required className="input-modal" />
        
                <label htmlFor="email"></label>
                <input onChange={completeForm} type="email" id="email" name="user" placeholder="Ingresa tu correo electrónico" required className="input-modal" />
        
                <label htmlFor="phone"></label>
                <input onChange={completeForm} type="tel" id="phone" name="phone" placeholder="Ingresa tu número de teléfono" className="input-modal" />
        
                <label htmlFor="password"></label>
                <input onChange={completeForm} type="password" id="passwordCreated" name="password" placeholder="Ingresa tu contraseña" required className="input-modal" />
        
                <label htmlFor="confirmed-password"></label>
                <input onChange={completeForm} type="password" id="confirmed-password" name="confirmedPassword" placeholder="Confirma tu contraseña" required className="input-modal" />
        
                <p className="exitLogin" id="createUserMessage"></p>
        
                <p className="valid" id="createUserMessageError"></p>
        
                <button type="submit" onClick={crearUsuario} className="button-create">Crear cuenta</button>
                </form>
            </div>
        </div>
    )
  );
};


