import '../styles/MainStudy.css';
import end from '../assets/eng.png';
import psicologia from '../assets/psicologia.png';
import calculador from '../assets/calculador.png';
import desarrolloMovil from '../assets/desarrollo-movil.png';
import continueMore from '../assets/continue.png';
import ingenieria from '../assets/ingenieria.png';
import ciencias from '../assets/ciencias.png';
import salud from '../assets/salud.png';
import negocios from '../assets/negocios.png';
import software from '../assets/software.png';

export const MainStudy = () => {
  return (
    <main>
        <div className="learning">
            <h2 className="color"><i>Continuar aprendiendo</i></h2>

            <div className="info-curse">
                <div className="keep-learning"> 
                    <div className="curses">
                        <div className="complete-curse">
                            <div className="car-curse">
                                <div className="container-image">
                                    <img src={end} className="image-car" />
                                </div>
                                <div className="description-curse">
                                    <p className="name-curse">Curso de inglés A1</p>
                                    <progress value="10" max="100"></progress>
                                    <p className="category">Idiomas</p>
                                    <button className="active-certification">Solicitr activación</button>
                                </div>
                            </div>
                        </div>
                        
                
                        <div className="complete-curse">
                            <div className="car-curse">
                                <div className="container-image">
                                    <img src={psicologia} alt="" className="image-car" />
                                </div>
                                <div className="description-curse">
                                    <p className="name-curse">Curso de Psicologia </p>
                                    <progress value="50" max="100"></progress>
                                    <p className="category">Salud y eduación</p>
                                    <button className="active-certification">Solicitar activación</button>
                                </div>
                            </div>
                    
                        </div>
                
                        <div className="complete-curse">
                            <div className="car-curse">
                                <div className="container-image">
                                    <img src={calculador} alt="" className="image-car" />
                                </div>
                                <div className="description-curse">
                                    <p className="name-curse">Curso de Matematicas financieras</p>
                                    <progress value="80" max="100"></progress>
                                    <p className="category">Negociis</p>
                                    <button className="active-certification">Solicitar activación</button>
                                </div>
                            </div>
                        </div>
                
                        <div className="complete-curse">
                            <div className="car-curse">
                                <div className="container-image">
                                    <img src={desarrolloMovil} alt="" className="image-car" />
                                </div>
                                <div className="description-curse">
                                    <p className="name-curse">Curso de programacion</p>
                                    <progress value="36" max="100"></progress>
                                    <p className="category">Ingenieria</p>
                                    <button className="active-certification">Solicitar activación</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            
                <div className="more-curses">
                    <img src={continueMore} />
                </div>
            </div>
        </div>
        
            <div className="container-recomemended">
                <h2 className="color"><i>Recomendados para ti</i></h2>
                <div className="container-recommended">
                    <div className="curse-recommended">
                        <img src={ingenieria} alt="" className="img-recommended" />
                        <h4>Ingenieria</h4>
                    </div>
        
                    <div className="curse-recommended">
                        <img src={ciencias} alt="" className="img-recommended" />
                        <h4>Ciencias</h4>
                    </div>
        
                    <div className="curse-recommended">
                        <img src={salud} alt="" className="img-recommended" />
                        <h4>Salud</h4>
                    </div>
        
                    <div className="curse-recommended">
                        <img src={negocios} alt="" className="img-recommended" />
                        <h4>Negocios</h4>
                    </div>
    
                    <div className="curse-recommended">
                        <img src={software} alt="" className="img-recommended" />
                        <h4>Software</h4>
                    </div>
    
                </div>
            </div>
    </main>
  )
}