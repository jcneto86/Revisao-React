import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import './App.css'

export default props =>
    <div className="App"> 
        <Card titulo="#01 - Primeiro componente React">
            <Primeiro />
        </Card>
        <Card titulo="#02 - Componente com parametros">
            <ComParametro titulo="Título" subtitulo="subTítulo" />
        </Card>
        <Card titulo="#03 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Carlos</li>
                    <li>Carol</li>
                    <li>Clarice</li>
                    <li>Cleiton</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#05 - Condicional v1.0">
            <Condicional numero={10} />
        </Card>
        <Card titulo="#06 - Condicional v2.0">
            <CondicionalComIf numero={10} />
        </Card>
        
    </div>