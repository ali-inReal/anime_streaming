import React from "react"
import { Button } from "react-bootstrap"
import "./AnimeCard.css"
export default function AnimeCard(props) {
    const desc = props.desc
    return (
        <div style={{
            // position: "relative"
        }} className="anime-card">
            <img src={props.image} alt="Anime poster" />
                <div className="details">
                    <p>Ep {props.ep}</p>
                    <p>SUB</p>
                </div>
                <h3 style={{
                    width: "100%"
                }} >{props.title}</h3>
              
        </div>
    )
}