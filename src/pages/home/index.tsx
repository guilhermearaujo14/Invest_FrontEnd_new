import { useEffect, useState } from "react"
import './style.css'

import dados from './dados.json';

interface totalizador{
    descricao: string;
    total: number;
    porcentagem: number;
}
export function Home(){
    const [totalizadores, setTotalizadores] = useState<totalizador[]>([]);
    const usuario = sessionStorage.getItem("usuario");
    
    useEffect(()=>{ 
        setTotalizadores(dados);
    },[])



    // if(!usuario){
    //     return(
    //         <h1>Usuário não logado</h1>
    //     )
    // }

    return(
        <div>
            <div className="container container-totalizadores">
                <ul className="list-group lista-totalizadores">
                {
                    totalizadores.map((item, index)=>{    
                        return(
                            <li className="list-group-item card border-dark mb-3 lista-totalizadores-item" key={index}>
                                <div className="card-header card-titulo">
                                    <span>{item.descricao}</span>
                                </div>
                                <div className="card-body container-card-corpo">
                                    <span className="card-text">R$ {item.total}</span>
                                    <span className="card-text">{item.porcentagem}%</span>
                                </div>
                            </li>
                        )
                        
                    })
                }
                </ul>
                
            </div>
        </div>
    )
}