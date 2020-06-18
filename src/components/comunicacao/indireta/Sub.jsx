import React from "react";

export default (props) => {
    function acao() {
        props.onClicar(Math.floor(Math.random() * 100), "Numero aleatório");
    }
    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};
