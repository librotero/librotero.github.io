import React from 'react';
import s from  '../estilos/Button.module.css'

export default function button(props){
    return(
        <div className={s.button}>
            <button>
                Get to know me
            </button>
        </div>
    )
}