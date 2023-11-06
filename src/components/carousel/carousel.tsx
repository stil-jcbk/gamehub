import "./style.scss"
import {useState} from "react";

type GameProps = {
    id: string;
    imgSrc: string;
}

function Game(props: GameProps){
    return(
        <div id={props.id} className="game">
            <img src={props.imgSrc} alt=""/>
        </div>
    )
}

type CarouselProps = {
    amount?: number;
}

export default function Carousel(props: CarouselProps){
    const [currentGame, setCurrentGame] = useState(0);
    const games: string[] = ["https://levendonline.com/cdn/shop/files/81PX1wwqq9L._AC_UF894_1000_QL80.jpg?v=1695910996", "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg", "https://cdn1.vox-cdn.com/uploads/chorus_asset/file/4000896/2.0.jpg", "https://www.giantbomb.com/a/uploads/original/8/87790/2079822-box_disland.png", "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/4000764/Hotline_Cover.0.jpeg", "https://www.digitiser2000.com/uploads/4/0/6/6/40667199/published/doom_1.jpg?1516607707"];
    
    const swapGames = () => {
        let firstGame = document.getElementById(`game${currentGame}`)
        let carousel = firstGame?.parentElement
        if(carousel && firstGame){
            carousel.removeChild(firstGame)
            carousel.appendChild(firstGame)
            if(currentGame === games.length-1){
                return setCurrentGame(0)
            }
            return setCurrentGame(currentGame + 1)
        }
    }
    
    return(
        <div className="carousel" style={{maxWidth: `calc((12rem + 15px) * ${games.length-1})`}}>
            <div className="gradient">
                <div className="games" onAnimationIteration={swapGames}>
                    {games.map((game, key) => (<Game id={"game"+key.toString()} key={key} imgSrc={game}/>))}
                </div>
            </div>
        </div>
    )
}