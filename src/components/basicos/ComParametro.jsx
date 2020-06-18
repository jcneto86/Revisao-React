// Componente com Parametros :

import React from "react";

export default (props) => (
    // props são somente leitura!
    // props.titulo = "Outro Título"
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>
);
