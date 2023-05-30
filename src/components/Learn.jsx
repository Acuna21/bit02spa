import programacion from "../assets/programacion.png"
import software from "../assets/software.png"
import humanidades from "../assets/humanidades.png"
import cocina from "../assets/cocina.png"
import negocios from "../assets/negocios.png"
import arte from "../assets/arte.png"
import salud from "../assets/salud.png"
import idiomas from "../assets/idiomas.png"
import moda from "../assets/moda.png"
import ciencias from "../assets/ciencias.png"
import deportes from "../assets/deportes.png"
import ingenieria from "../assets/ingenieria.png"
import '../styles/Learn.css'

export const Learn = () => {
  return (
    <main>
        <h1 className="title-main">Explora miles de tematicas gratis</h1>

        <ul className="category">
            <li className="li-category">
                <img src={programacion} alt="" width="100px" />
                <p className="title-category">Programacion</p>
            </li>

            <li className="li-category">
                <img src={software} alt="" width="100px" />
                <p className="title-category">Software</p>
            </li>

            <li className="li-category">
                <img src={humanidades} alt="" width="100px" />
                <p className="title-category">Humanidades</p>
            </li>

            <li className="li-category">
                <img src={cocina} alt="" width="100px" />
                <p className="title-category">Cocina y bebidas</p>
            </li>

            <li className="li-category">
                <img src={negocios} alt="" width="100px" />
                <p className="title-category">Negocios</p>
            </li>

            <li className="li-category">
                <img src={arte} alt="" width="100px" />
                <p className="title-category">Arte</p>
            </li>

            <li className="li-category">
                <img src={salud} alt="" width="100px" />
                <p className="title-category">Salud y bienestar</p>
            </li>

            <li className="li-category">
                <img src={idiomas} alt="" width="100px" />
                <p className="title-category">Idiomas</p>
            </li>

            <li className="li-category">
                <img src={moda} alt="" width="100px" />
                <p className="title-category">Moda y belleza</p>
            </li>

            <li className="li-category">
                <img src={ciencias} alt="" width="100px" />
                <p className="title-category">Ciencias</p>
            </li>

            <li className="li-category">
                <img src={deportes} alt="" width="100px" />
                <p className="title-category">Deportes</p>
            </li>
            
            <li className="li-category">
                <img src={ingenieria} alt="" width="100px" />
                <p className="title-category">Ingeniería</p>
            </li>
            
        </ul>
    </main>
  )
}