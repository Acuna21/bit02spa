import { useNavigate } from 'react-router-dom';
import '../styles/DeleteAccount.css'

export const DeleteAccount = () => {

  const listUsers = JSON.parse(localStorage.getItem('listUsers'));
  const token = JSON.parse(localStorage.getItem('token'));

  const navigate = useNavigate();

  const deleteAccount = () => {
    const newListUsers = listUsers.filter( user => user.user !== token.email);
    localStorage.setItem('listUsers', JSON.stringify(newListUsers));
    logOut();
  }

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/bit02spa')
  };

  return (
    <div className="recover-account">
        <header>
                <h2 className="title-account">Elimiar cuenta</h2>
            </header>
            
        <div className="information">
            
                <div className="title-secundary">
                  <i className="fa-solid fa-user-xmark" style={{fontSize:"3rem"}}></i>
                  <h2 className="text-color">¿Estás seguro de eliminar tu cuenta?</h2>
                </div>
        
                <div className="info-account">
                    <p className="descrip-required">
                        Si eliminas tu cuenta, se perderán todo los datos y progresos obtenidos hasta ahora.
                    </p>

                    <button type="button" value="Aceptar" onClick={deleteAccount} className="button-send new-link">Aceptar</button>
        
                </div>
        </div>

    </div>
  )
}