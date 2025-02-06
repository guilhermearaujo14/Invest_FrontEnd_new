import './style.css'

import dados from './dados.json'
import { useEffect } from 'react';

export default function TotalizadoProventos() {


    function BuscaDados() {
        dados.sort((a, b) => b.valor - a.valor)
    }

    useEffect(() => {
        BuscaDados();
    })
    
    return (
        <div className="container">
            <table className='table '>
                <thead>
                    <tr>
                        <th scope='col'>Papel</th>
                        <th scope='col'>Valor</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        dados.map((dado, i) => {
                            return (
                                <tr key={i}>
                                    <td>{dado.papel}</td>
                                    <td>{dado.valor}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}