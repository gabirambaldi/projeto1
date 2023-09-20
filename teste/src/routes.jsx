import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Paises from './pages/Paises'
import Passaporte from './pages/Passaporte'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/paises" element={<Paises />} ></Route>
                <Route path="/passaportes" element={<Passaporte />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes




