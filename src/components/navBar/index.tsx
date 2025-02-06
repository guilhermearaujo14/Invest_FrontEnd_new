import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import listaOpcoes from './opcoesMenus.json';
import { useEffect, useState } from 'react';

interface opcoesMenu{
    opcao: string;
    rota: string;
}
export function NavBar(){
    const [opcoes, setOpcoes] = useState<opcoesMenu[]>([])
    const navigate = useNavigate();

    useEffect(()=>{
        setOpcoes(listaOpcoes);
    },[opcoes])


    const handleAbrirRota = (rota: string) =>{
        return navigate(rota);
    }

    return(
        <div className="container-navbar">
            <div className="container-logo">
                <img src="../../../public/Logo.svg" alt="logo invest" width={110} height={55} className='img-logo' />
            </div>
            <div>
                <ul className="nav">
                    {
                        opcoes.map((opcao, index)=>{
                            return(
                                <li className="nav-item" key={index}>
                                    <Link to={opcao.rota} className='nav-link link-item-menu'>{opcao.opcao}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <select className="form-select select-menu"  onChange={(e)=>handleAbrirRota(e.target.value)}>
                        {
                            opcoes.map((opcaoSelect)=>{
                                return(
                                        <option value={opcaoSelect.rota} key={opcaoSelect.opcao}>{opcaoSelect.opcao}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}