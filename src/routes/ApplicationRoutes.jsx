import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portifolio'
import Comentarios from '../pages/Comentario/Comentario'
import Menu from "../components/Menu/Menu"
import Footer from '../components/Footer/Footer'

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="comentarios" element={<Comentarios />} />
            </Routes>
            <Footer text="Desenvolvido por Mariana Rodrigues" />
        </BrowserRouter>
    )
}
export default ApplicationRoutes

