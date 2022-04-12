import React from 'react';
import s from '../estilos/Work.module.css'
import Card from '../Componenetes/Card';

export default function Work(props){
    return(
        <div id={s.galeria}>
        <div class={s.container}>
            <h1>My Work</h1>
            <div className={s.espacioChico}></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laborum ut fuga beatae. Suscipit temporibus explicabo beatae dolore hic minus? Architecto blanditiis perspiciatis voluptatum dolor voluptates, corporis vitae distinctio quidem!</p>

        </div>
        <div className={s.row}>
            <Card />

            <div className={s.column}>
            <img src={"https://media.istockphoto.com/vectors/programming-design-concept-vector-id947663966?k=20&m=947663966&s=612x612&w=0&h=JUMJJkuDL6c9vReaJVL3Y4pDvJtqMzSVVYiJ6CSE-8A="} alt="Galeria Imagen"/>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/4/48/Taschenrechner_TI_Programmer_1980_resized.jpg"} alt="Galeria Imagen"/>
            </div>
            <div className={s.column}>
            <img src={"https://www.kindpng.com/picc/m/370-3705520_01-desktop-programmer-programming-flowchart-clipart-technology-vector.png"} alt="Galeria Imagen"/>
            <img src={"https://media.istockphoto.com/vectors/programming-design-concept-vector-id947663966?k=20&m=947663966&s=612x612&w=0&h=JUMJJkuDL6c9vReaJVL3Y4pDvJtqMzSVVYiJ6CSE-8A="} alt="Galeria Imagen"/>
            
            
            </div>
        </div>
        <div className={s.espacioChico}></div>

        <a>Ver más</a>
    </div>
    )
}