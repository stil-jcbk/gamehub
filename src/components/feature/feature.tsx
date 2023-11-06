import "./style.scss"

type FeatureProps = {
    text: string;
    imgSrc: string;
}

export default function Feature(props: FeatureProps){
    return(
        <div className="feature">
            <div className="gradient">
                <img src={props.imgSrc} alt=""/>
            </div>
            <div className="text-container">
                <p className="text">{props.text}</p>
            </div>
        </div>
    )
}