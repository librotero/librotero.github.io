import React from 'react';
import s from '../estilos/Header.module.css'
import Button from './Button'

export default function Header(props){
    return(
        <div className={s.parrallax}>
            <div>
                
            </div>
            <div className={s.centrado}>
                <h1>Hello World!</h1>
                <h3>My name is Jesús, I'm developer full stack</h3>
                <Button />
            </div>
            <div>
                
            </div>
        </div>
    )
}