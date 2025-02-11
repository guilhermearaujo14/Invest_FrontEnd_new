
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
        lista.sort((a,b)=>{
            if(a.tipo < b.tipo){
                return -1
            }
            if(a.tipo > b.tipo){
                return 1
            }
            return 0
        })
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
                                    <div className="card-header d-flex justify-content-between">
                                        <span className='fw-bold'>{dado.papel}</span>
                                        <span>{dado.tipo}</span>
                                    </div>
                                    <div className="card-body text-primary">
                                        <div>
                                            <span>Quantidade: {dado.quantidade}</span>
                                        </div>
                                        <div>
                                            <span>Preço médio: R$ {dado.precoMedio}</span>
                                        </div>
                                        <div>
                                            <span>Total investido: R$ {dado.totalInvestido}</span>
                                        </div>
                                        <div>
                                            <span>Total atual R$ {dado.totalAtual}</span>
                                        </div>
                                        <div>
                                            <span>Perda/Lucro R$ {dado.totalPerdaLucro}</span>
                                        </div>
                                    </div>
                                    <div>

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