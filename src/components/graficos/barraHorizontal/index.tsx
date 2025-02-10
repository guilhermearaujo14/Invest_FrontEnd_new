import * as highchart from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const data = [{"papel": "TVRI11", "valor": 290},
    {"papel": "TVRI11", "valor": 290},{"papel": "VRTA11", "valor": 590},
    {"papel": "XPML11", "valor": 360},{"papel": "DEVA11", "valor": 190},
    {"papel": "HGLG11", "valor": 90},{"papel": "IRDM11", "valor": 390},
    {"papel": "HGRE11", "valor": 194},{"papel": "BTHF11", "valor": 250},
    {"papel": "GLOG11", "valor": 265},{"papel": "HFOF11", "valor": 510},
    {"papel": "VSLH11", "valor": 280},{"papel": "SNAG11", "valor": 235}

]
data.sort(e => e.valor)
const titulos = data.map(e => e.papel)


export function BarraHorizontal(){
    
    const options: Highcharts.Options = {
        title: {
            text: 'Dividendos por ativo'
        }, 
        chart:{
            type: 'line'
        },
        xAxis:{ 
            categories: titulos
        },
        series:[
            {
            type: 'bar',
            data: data.map((e)=>({
                y: e.valor,
            }))
            }]
        
    }




        return(
            <div>
                <HighchartsReact 
                    highcharts={highchart}
                    options={options}
                />
            </div>
        )
}