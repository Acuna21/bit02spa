import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p className="info-year">&copy; 2023 LearnYOUP</p>
            <ul className="footer-links">
            <li><a href="index.html">Acerca de nosotros</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            </ul>
        </div>
    </footer>
  )
}