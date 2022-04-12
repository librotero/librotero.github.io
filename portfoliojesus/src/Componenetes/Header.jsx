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
                <h3>I'm developer full stack,<br />
                    Design & Animation</h3>
                <Button text="Get to know me"/>
            </div>
            <div>
                
            </div>
        </div>
    )
}