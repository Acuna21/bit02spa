import { useState } from 'react';
import '../styles/Modal.css'

// eslint-disable-next-line react/prop-types
export const Modal = ({ isOpen, onClose}) => {

  const [newUser, setNewUser] = useState({
    name: null,
    email: null,
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
    const {name, email, phone, password, confirmedPassword} = newUser;
    if ( !name || !email || !phone || !password || !confirmedPassword ) {
      alert('Todos los campos son obligatorios.');
      return
    }
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('token', JSON.stringify({email: newUser.email}));
    clearForm();
    onClose();
    alert('Usuario Creado Satisfactoriamente.');
  }

  const clearForm = () => {
    setNewUser({
      name: null,
      email: null,
      phone: null,
      password: null,
      confirmedPassword: null,
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
                <input onChange={completeForm} type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required className="input-modal" />
        
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


