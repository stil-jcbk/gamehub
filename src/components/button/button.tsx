import "./style.scss"
import {MouseEventHandler} from "react";

type ButtonProps = {
    text: string;
    onClick: MouseEventHandler;
}
export default function Button(props: ButtonProps){
    return(
        <div onClick={props.onClick} className="btn">
            <span className="btn-text"></span>
        </div>
    )
}