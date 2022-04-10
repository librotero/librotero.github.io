import React from 'react';
import s from '../estilos/Header.module.css'
import Button from './Button'
export default function Header(props){
    return(
        <div>
            <div className={s.parrallax}>
                
                <img src={"..\estilos\img\imagen1.jpg"}/>
            </div>
            <div className={s.centrado}>
                <h1>Hola Mundo</h1>
                <h3>Mi nombre es jesus y soy desarrollador web full stack</h3>
                <Button />
            </div>
            <div>
                
            </div>
        </div>
    )
}