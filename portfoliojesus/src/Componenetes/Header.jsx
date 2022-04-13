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
                <p>I'm developer full stack, Design & Animation</p>
                <Button text="Get to know me"/>
            </div>
            <div>
                
            </div>
        </div>
    )
}