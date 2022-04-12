import React from 'react';
import s from  '../estilos/Button.module.css'

export default function button(props){
   
    return(
        <div className={s.button}>
            <button>
                {props.text}
            </button>
        </div>
    )
}
