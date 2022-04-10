import React from 'react';
import s from '../estilos/Header.module.css'
export default function Header(props){
    return(
        <div>
            <div className={s.parrallax}>
                
                <img src={"https://as2.ftcdn.net/v2/jpg/02/78/37/47/1000_F_278374738_ypRn0utOVnebuhmpSrDiwkzFsdqEm0aa.jpg"}/>
            </div>
            <div>
                <h1>Hola Mundo</h1>
            </div>
        </div>
    )
}