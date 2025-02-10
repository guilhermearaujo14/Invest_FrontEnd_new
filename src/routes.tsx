import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Investimentos } from './pages/investimentos'
import { CompraVenda } from './pages/compraVenda'
import { Proventos } from './pages/proventos'
import { Home } from './pages/home'
import { CadastraUsuario } from './pages/cadastrarUsuario'
import { NavBar } from './components/navBar'
import { Dashboards } from './pages/dashboards'
import AuthProvider from './contexts/auth';

export function Rotas() {
    const usuario = sessionStorage.getItem("usuario");

    return (

        <BrowserRouter>
            <AuthProvider>

                {!usuario ? <></> : <NavBar />}

                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/investimentos' element={<Investimentos />} />
                    <Route path='/compraVenda' element={<CompraVenda />} />
                    <Route path='/proventos' element={<Proventos />} />
                    <Route path='/novoUsuario' element={<CadastraUsuario />} />
                    <Route path='/dashboards' element={<Dashboards />} />

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )

}