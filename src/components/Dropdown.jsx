import { useState } from 'react';
import '../styles/Dropdown.css';

// eslint-disable-next-line react/prop-types
export const Dropdown = ({navigate}) => {

    const [visible, setVisible] = useState(false);

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/bit02spa')
    }

    const deleteAccount = () => {
        setVisible(false);
        navigate('/bit02spa/delete-account');
    }

  return (
    <div className='dropdown-container'>
        <i className="fa-solid fa-circle-user" onClick={() => setVisible(!visible)}></i>
        <div className={`dropdown ${visible ? 'visible' : 'hidden'}`}>
            <ul className='dropdown-item-container' >
                <li className='dropdown-item' onClick={deleteAccount} >Eliminar cuenta</li>
                <li className='dropdown-item' onClick={logOut} >LogOut</li>
            </ul>
        </div>
    </div>
  )
}