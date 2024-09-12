import Draggable from 'react-draggable';
import style from './App.module.css'


const Modal = (props) =>{
    return(
        <Draggable>
            <div className={style.card}>
                <h1>{props.data.name}</h1><br/>
                <p>{props.data.species}</p>
                <p><strong>{props.data.gender}</strong> </p>
                <img width={150} height={130} src={props.data.image}/>
                <button onClick={props.close}>&#128473;</button><br></br>
            </div>
        </Draggable>
    )
}

export default Modal