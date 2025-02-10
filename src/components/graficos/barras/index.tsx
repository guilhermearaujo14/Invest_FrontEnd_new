import { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function GraficoBarraVertical(props: HighchartsReact.Props){
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const cores = ["#006400", "#556B2F", "#8B8000", "#8B4513", "#8B0000"];

    const data = [{tipo: 'Ações', valor: 3000.25},
        {tipo: 'Fundos imobliários', valor: 2500.83},
        {tipo: 'BDR', valor: 600},
        {tipo: 'ETF', valor: 1500}]

        
    const tipos = data.map(e => e.tipo)

    const options: Highcharts.Options = {
        title: {
            text: 'Valores'
        },
        xAxis:{
            categories:tipos,
            accessibility:{
                description:'Tipo'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Valor investido'
            }            
        },
        series: [
            {
               
                    name: '',
                    type: 'column',
                    data: data.map((e, i)=>({
                        y: e.valor,
                        color: cores[i]
                    }))
            }
        ]
    };

    return(
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...props}
            />
        </div>
    )
}
