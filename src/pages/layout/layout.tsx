import "./style.scss"
import {Outlet} from "react-router-dom"
import Navbar from "../../components/navbar/navbar";

export default function Layout(){
    return(
        <div className="app-body">
        <Navbar/>
        <Outlet/>
        </div>
    )
}