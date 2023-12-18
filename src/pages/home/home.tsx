import {gsap} from "gsap";
import "./style.scss";
import Section from "../../components/section/section";
import Feature from "../../components/feature/feature";
import Button from "../../components/button/button";
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import {LegacyRef, useLayoutEffect, useRef} from "react";

import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function HomePage(){
    useLayoutEffect(() => {
        const features: HTMLElement[] = gsap.utils.toArray(".feature")
        features.forEach((feature, index) => {
            console.log(feature)
            gsap.set(feature, {opacity: 0, y:50})
            gsap.to(feature, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.25,
                scrollTrigger: {
                    trigger: "#section-features",
                    start: "top 80%",
                },
            })
        })
    }, [])

    return(
        <div>
            <Section name="land">
                <div className="content">
                    <h1 className="title">GRAJ<br/>TRENUJ<br/><span className="special">WYGRYWAJ</span></h1>
                    <p className="description">Pierwsze miejsce we Wrocławiu gdzie za granie w twoje ulubione gry możesz wygrać nagrody</p>    
                </div>
                <div className="video-container">
                    <video loop autoPlay playsInline muted src="https://basestack.gg/wp-content/uploads/2023/04/20211027-Gaming-Cafe_1.mp4"></video>
                </div>
            </Section>
            <Section name="localization">
                <h1 className="title">PRZYJDŹ DO NAS</h1>
                <div className="address">
                    GameHub
                    <br />
                    Rynek 20
                    <br/>
                    Wrocław 50-450
                </div>
            </Section>
            <Section name="features">
                <div className="container">
                    <Feature text="Wydajne komputery" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/High-spec-PCs.jpg"/>
                    <Feature text="Nagrody" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/Cafe-food-drink-680x400.jpg"/>
                    <Feature text="Rezerwacje" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/High-spec-PCs.jpg"/>
                    <Feature text="Ranking" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/Cafe-food-drink-680x400.jpg"/>
                    <Feature text="Strefa gastro" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/High-spec-PCs.jpg"/>
                    <Feature text="Strefa konsol" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/High-spec-PCs.jpg"/>
                    <Feature text="Turnieje" imgSrc="https://basestack.gg/wp-content/uploads/2023/04/Cafe-food-drink-680x400.jpg"/>
                </div>
            </Section>
            <Section name="games">
                <h1 className="title">W CO U NAS ZAGRASZ</h1>
                <Carousel/>
            </Section>
            <Footer/>
        </div>
    )
}