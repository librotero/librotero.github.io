import React from 'react'
import s from '../estilos/Card.module.css'

function Card(props) {
  return (
    <div className={s.column}>
        <img src={"https://media.istockphoto.com/vectors/programming-design-concept-vector-id947663966?k=20&m=947663966&s=612x612&w=0&h=JUMJJkuDL6c9vReaJVL3Y4pDvJtqMzSVVYiJ6CSE-8A="} alt="Galeria Imagen"/>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/4/48/Taschenrechner_TI_Programmer_1980_resized.jpg"} alt="Galeria Imagen"/>
    </div>
    )
}

export default Card
