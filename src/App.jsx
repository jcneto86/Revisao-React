import "./App.css";

import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/Contador/Contador";
import Mega from "./components/mega/Mega";

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro componente React" color="#DB504A">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Componente com parametros" color="#ADC698">
                <ComParametro titulo="Título" subtitulo="subTítulo" />
            </Card>
            <Card titulo="#03 - Componente com filhos" color="#858AE3">
                <ComFilhos>
                    <ul>
                        <li>Carlos</li>
                        <li>Carol</li>
                        <li>Clarice</li>
                        <li>Cleiton</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição" color="#2C0735">
                <Repeticao />
            </Card>
            <Card titulo="#05 - Condicional v1.0" color="#6B0F1A">
                <Condicional numero={10} />
            </Card>
            <Card titulo="#06 - Condicional v2.0" color="#6CD4FF">
                <CondicionalComIf numero={13} />
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#D496A7">
                <Pai sobrenome="Cardoso" />
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#6A2E35">
                <Super />
            </Card>
            <Card titulo="#09 - Inputs" color="#B2B09B">
                <Input />
            </Card>
            <Card titulo="#10 - Contador" color="#B6D094">
                <Contador passo={10} valor={20}/>
            </Card>
            <Card titulo="#11 - Mega" color="#BBC094">
                <Mega qtdeNumero={6}></Mega>
            </Card>
        </div>
    </div>
);
