import React from 'react';
import s from '../estilos/Footer.module.css'
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube,AiOutlineBehanceSquare} from "react-icons/ai";

export default function Footer(props){
    return(
        <div className={s.Footer}>
         <div>
             <ul>
                 <li><a><AiFillGithub /></a></li>
                 <li><a><AiFillTwitterCircle /></a></li>
                 <li><a><AiFillYoutube /></a></li>
                 <li><a><AiOutlineBehanceSquare /></a></li>
             </ul>
         </div>
         <div>
             <h3>By Eduardo Moreno</h3>
         </div>
        </div>
    )
}