import "./style.scss"
import {gsap} from "gsap";
import Button from "../../components/button/button"
import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useLayoutEffect, useRef} from "react"; 

export default function AuthPage(){
    const [params, setParams] = useSearchParams()
    
    const type = params.get("type") as string;
    const alter = type === "login"? "register" : "login";
    
    const authForm = useRef<HTMLFormElement>(null)
    
    useEffect(() => {
        if(type !== "login" && type !== "register"){
            setParams({type: "login"})
        }
    })
    
    useLayoutEffect(() => {
        gsap.fromTo(authForm.current,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: .75
                    }
                    )
    })
    
    return(
        <div className="auth-page">
            <form ref={authForm} id="auth-form">
                {type === "register"?
                <>
                    <input type="text" placeholder="first name" />
                    <input type="text" placeholder="last name" />
                </>
                : <></>}
                <input type="email" placeholder="your@email.com" />
                <input type="password" placeholder="password"/>
                {type === "register"? <input type="password" placeholder="confirm password"/> : <></>}
                <Button onClick={() => {}}>{type}</Button>
                <Link className="auth-alter" to={`/auth?type=${alter}`}>{alter}</Link>
            </form>
        </div>
    )
}