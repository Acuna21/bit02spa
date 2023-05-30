import logoi from '../assets/logoi.png'
import '../styles/Home.css'

export const Home = () => {
  return (
    <main>
        <div className="home-info">
            <h1> Aprender es vivir</h1>
            <p className="about-us">LearnYOUP es una incorporación de educación virtual dedicada a compartir el conocimiento en todo el mundo. Lo ideal es que aquí tengas una guía para aprender lo que quieras en todos las temáticas que necesites.</p>
        
            <img src={logoi} alt="" srcSet="Nunca es tarde para aprender" />
        </div>
        
        <div className="mission">
            <img src="https://ethic.es/wp-content/uploads/2021/04/Untitled-design-18.jpg" alt="" className="img-mission" />
    
            <div className="infor-mission">
                <p className="text-color">
                    Nuestra misión es compartir guias de conocimiento para facilitar a cualquier persona el acceso a cursos y rutas de alta calidad, sin importar su región, edad, ocupación o ingresos.
                </p>
            </div>
        </div>
        
        <div className="container-tools">
            <h2 className="text-color"><em>Te damos las herramientas para aprender</em></h2>
    
            <div className="tools">

                <div className="design-tools">
                    <p className="title-tools"><strong>Crea</strong></p>
                    <i className="fa-solid fa-chalkboard-user icon-tools"></i>
                    <p className="description-tools">
                        Adquiere el conocimiento necesario para convertir tus ideas en nuevos proyectos.
                    </p>

                </div>
        
                <div className="design-tools">
                    <p className="title-tools"><strong>Comunidad</strong></p>
                    <i className="fa-sharp fa-solid fa-users icon-tools"></i>
                    <p className="description-tools">
                        Conecta con una comunidad para potenciar tu aprendizaje.
                    </p>
                </div>
        
                <div className="design-tools">
                    <p className="title-tools"><strong>Proyectos</strong></p>
                    <i className="fa-sharp fa-solid fa-diagram-project icon-tools"></i>
                    <p className="description-tools">
                        Genera impacto con grandes proyectos que cambien al mundo.
                    </p>
                </div>

            </div>
            
        </div>
        
        <div className="container-values">
            <h2 className="text-color"><em>Valores de LearnYOP</em></h2>
    
            <div className="values">
                <img src="https://d3puay5pkxu9s4.cloudfront.net/academy/imagenes/about/academy/5.png" alt="Compartir conocimineto" className="image" />
    
                <div className="info-values">
                    <p className="title-values">Compartir conocimiento</p>
        
                    <p className="description-values">Utilizamos el valor de compartir conocimiento para incrementar <strong>el acceso a guías y cursos todo el mundo</strong> y de esta forma contribuir a la transformación de las economías y las sociedades.</p>
                </div>
            </div>
    
            <div className="values">
                <div className="info-values">
                    <p className="title-values">Respeto</p>
                    
                    <p className="description-values">El respeto crea un ambiente en el que todos se sienten valorados, escuchados y seguros para expresar sus ideas y opiniones. Esto promueve <strong>la participación activa y el intercambio de conocimientos </strong>entre los estudiantes y los educadores.</p>
                </div>
    
                <img src="https://www.danielcolombo.com/wp-content/uploads/2021/05/Respeto.jpg" alt="Respeto" className="image" />
            </div>
    
            <div className="values">
                <img src="  https://d3puay5pkxu9s4.cloudfront.net/academy/imagenes/about/academy/14.png
                " alt="Compartir conocimineto" className="image" />
    
                <div className="info-values">
                    <p className="title-values">Gratitud en nuestras relaciones interpersonales</p>
        
                    <p className="description-values">
                        Trabajamos en plasmar el valor de la gratitud en nuestras relaciones interpersonales, de manera que <strong>todos los miembros de LearnYOP puedan sentir la estima y el reconocimiento de sus esfuerzos.</strong>
                    </p>
                </div>
            </div>
        </div>

    </main>
  )
}