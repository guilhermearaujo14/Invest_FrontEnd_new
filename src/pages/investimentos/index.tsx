
import './style.css'

import lista from './dadosInvestimentos.json';
import { useEffect, useState } from "react";

interface dadosAtivo{
        tipo: string;
        papel: string;
        precoMedio: number;
        quantidade: number;
        totalInvestido: number;
        totalAtual: number;
        totalPerdaLucro: number;
}
export function Investimentos(){
    const [dados, setDados] = useState<dadosAtivo[]>([])
    useEffect(()=>{
        setDados(lista);
    },[dados])

    return(
        <div>
            <div className="container container-investimento">
                <div className="row cabecalho">
                    <div className="col container-titulo">
                        Meus investimentos
                    </div>
                    <div className="col container-botoes">
                        <button className='btn btn-dark' title='Adicionar ativo'>Adicionar</button>
                        <button className='btn btn-light' title='Cadastra venda de ativo'>Vender</button>
                    </div>
                </div>
                <ul className="card-investimento">
                    {
                        dados.map((dado, index)=>{
                            return(
                                <li className={`card mb-3 card-investimento-item ${dado.tipo === 'Ação' ? 'border-primary':''} 
                                                                                ${dado.tipo === 'Fundo imobiliário' ? 'border-success' : '' } 
                                                                                ${dado.tipo === 'BDR' ? 'border-danger' : '' }
                                                                                ${dado.tipo === 'ETF' ? 'border-warning' : '' }
                                                                                ${dado.tipo === 'FII - Agro' ? 'border-info' : '' }
                                                }`} key={index}>
                                    <div className="card-header">
                                        <span>{dado.tipo}</span>
                                    </div>
                                    <div className="card-body text-primary">
                                        <span>{dado.papel}</span>
                                    </div>
                                    <div className="card-acoes">
                                        <div className="btn-acoes" title='Listar compras e vendas do ativo'>
                                            <i className="bi bi-list-ol" ></i>
                                        </div>
                                        <div className="btn-acoes" title={`Adicionar compra do ${dado.papel}`}>
                                            <i className="bi bi-plus-circle" ></i>
                                        </div>
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