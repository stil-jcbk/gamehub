import "./style.scss";
import Button from "../../components/button/button";
import {useNavigate} from "react-router-dom"

export default function ProfilePage(){
    const navigate = useNavigate();

    return(
    <div className="profile-page">
        <div className="profile">
            <div className="user-info">
                <p className="id"><span className="super">#</span>24648796721</p>
                <div className="name">
                    <p>
                        JAKUB
                      <br/>
                        KONIECZNY
                    </p>
                </div>
                <p className="email">jcbkdev@gmail.com</p>
            </div>
            <div className="stat-container">
                <div className="hours">
                    20
                    <span className="super">h</span>
                </div>
                <Button className="btn-profile" onClick={() => {}}>DOŁADUJ</Button>
            </div>
            <div className="stat-container">
                <div className="points">
                    1350
                    <span className="super">p</span>
                </div>
                <Button className="btn-profile" onClick={() => {}}>WYMIEŃ</Button>
            </div>
            <Button className="btn-profile btn-logout" onClick={() => {navigate("/")}}>WYLOGUJ</Button>
        </div>
    </div>
    )
}
