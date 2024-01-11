import "./style.scss"
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div className="navbar">
            <img className="logo" src="/logo.svg" alt=""/>
            <div className="routes">
                <Link to="/">HOME</Link>
                <Link to="/auth?type=login">LOGIN</Link>
            </div>
        </div>
    )
}