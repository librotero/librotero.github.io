import React from 'react';
import s from '../estilos/About.module.css';

export default function About(props){
    return(
<div>
    <div className={s.about}>
        <p>About me</p>
        <h1>Eduardo Moreno</h1>
    <div className={s.espacio}></div>
        <p className={s.textAbout}>Hola. Soy Eduardo, un desarrollador web full stack con sede en Mendoza Argentina. Soy <br />
            un creativo apasionado impulsado por la sinergia del diseño y la tecnología. Busco <br />
            darle sentido al diseño.</p>
    <div className={s.espacio}></div>
        <a>Read More</a>
    </div>
</div>

    )
}