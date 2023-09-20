import React from 'react';
import ReactDOM from 'react-dom/client';
import Navegacion from './Navegacion';
import Random from './Random';
import Tabla from './Tabla';
import Fulbito from './Fulbito';
import Pokemon from './Pokemon';
import "./style.css";
import Tareas from './Tareas';
import Cronometro from './Cronometro';
import Prueba from './Prueba';
import Countdown from './Countdown';

const root = ReactDOM.createRoot(document.getElementById('root'));
const a = [{nombre: "jano", edad : 10},{nombre: "Nahuel", edad : 16},{nombre: "Thiathom", edad : 16},{nombre: "Trini", edad : 30}];
root.render(
    <>
    <Navegacion/>
    <Random/>
    <Tabla a={a}/>
    <Fulbito/>
    <Pokemon/>
    <Tareas/>
    <Cronometro/>
    <Prueba/>
    <Countdown/>

    </>
);
