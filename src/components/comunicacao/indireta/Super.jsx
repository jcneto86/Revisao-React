import React, { useState } from "react";
import Sub from "./Sub";

export default (props) => {
    const [texto, setTexto] = useState('Valor')
    const [num, setNum] = useState(0)
    function onClicBtn(n, t) {
        setNum(n)
        setTexto(t)
    }
    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={onClicBtn}>Pedro</Sub>
        </div>
    );
};
