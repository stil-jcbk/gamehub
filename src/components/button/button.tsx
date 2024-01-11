import "./style.scss"
import {MouseEventHandler} from "react";

type ButtonProps = {
    children: string;
    className?: string;
    onClick: MouseEventHandler;
}
export default function Button(props: ButtonProps){
    return(
        <div onClick={props.onClick} className={"btn " + props.className}>
            <span className="btn-text">{props.children}</span>
        </div>
    )
}
