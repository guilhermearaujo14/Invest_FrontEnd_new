import './style.css'
import TotalizadoProventos from '../../components/totalizadorProventos'
import dados from './dados.json'
export function Proventos() {



    return (
        <div>
            <div className="container">
                <div className="header">
                    <h4>Adicionar provento</h4>
                </div>
                <div className="container-actions">
                    <button type="button" className='btn btn-dark'>Consultar dividendo</button>
                </div>
                <div className="formulario-proventos">
                    <form action="POST" className="form-proventos">
                        <div className="mb-2">
                            <label htmlFor="dataRecebimento" className='labelInput'>Data</label>
                            <input type="date" className='form-control' name="dataRecebimento" id="dataRecebimento" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="papel" className='labelInput'>Papel</label>
                            <input type="text" className='form-control' name="papel" id="papel" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="valor" className='labelInput'>Valor</label>
                            <input type="text" className='form-control' name="valor" id="valor" />
                        </div>
                        <div className="btn-salvar mt-4">
                            <button className="btn btn-success">Adicionar</button>
                        </div>
                    </form>
                </div>
                
                <div className="grafico mt-5">
                    <div className="accordion" id="accordionTotalizadores">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Totalizadores</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionTotalizadores">
                                <div className="accordion-body">
                                    <TotalizadoProventos />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="accordion" id="accordionFiltros">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="filtros">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiltros" aria-expanded="true" aria-controls="collapseFiltros">
                                    <strong>Filtros</strong>
                                </button>
                            </h2>
                            <div id="collapseFiltros" className="accordion-collapse collapse" aria-labelledby="filtros" data-bs-parent="#accordionFiltros">
                                <div className="accordion-body filtros">
                                    <div className="row">
                                        <div className='col-sm'>
                                            <label htmlFor="dataInicio">Data inicio</label>
                                            <input type="date" className='form-control' name="" id="dataInicio" />
                                        </div>
                                        <div className='col-sm'>
                                            <label htmlFor="dataFinal">Data final</label>
                                            <input type="date" className='form-control' name="" id="dataFinal" />
                                        </div>
                                        <div className='col-sm'>
                                            <label htmlFor="papel">Papel</label>
                                            <input type="text" className='form-control' name="" id="dataFinal" />
                                        </div>
                                        <div className='col-sm mt-4'>
                                            <button className='btn btn-info'><strong>Pesquisar</strong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="tabela-proventos mt-3">
                    <table className='table table-striped table-dark'>
                        <thead>
                            <tr>
                                <th className='col'>#</th>
                                <th className='col'>Papel</th>
                                <th className='col'>Valor</th>
                                <th className='col'>Data de pagamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dados.map((dado, i) => {
                                    return (
                                        <tr key={i}>
                                            <td><button className='btn btn-danger'>Remover</button></td>
                                            <td>{dado.papel}</td>
                                            <td>{dado.valor}</td>
                                            <td>{dado.data_pagamento}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}