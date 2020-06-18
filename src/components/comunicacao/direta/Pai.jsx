import React from "react";
import Filho from "./Filho";

export default (props) => (
    <div>
        <Filho {...props}>João</Filho> {/*Faz um split com os paremetros passados*/}
        <Filho sobrenome={props.sobrenome}>Maria</Filho> {/*Pega um paremetro expecifico*/}
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>
);
