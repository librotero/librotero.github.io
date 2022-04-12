import React from 'react';
import s from '../estilos/Nav.module.css'

export default function Nav(props){

    
    return(
        <div>
        <div id={s.header}>
            <div class={s.header}>
               <div className={s.logo}><img src={"https://images.vexels.com/media/users/3/184553/isolated/preview/a8b159a4f8b4dc2b8402cc1a1b47db76-icono-de-letra-j-abc-mexicano.png"} alt=""/></div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About me</a></li>
                    <li><a href="">Work</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}