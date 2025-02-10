import { BarraHorizontal } from '../../components/graficos/barraHorizontal';
import { GraficoBarraVertical } from '../../components/graficos/barras';
import './style.css';

export function Dashboards(){
    return(
        <div>
            <div className="container">
                <h1>Tela Dashboards</h1>
                <div>
                    <GraficoBarraVertical />
                </div>
                <div>
                    <BarraHorizontal />
                </div>
            </div>
        </div>
    )
}