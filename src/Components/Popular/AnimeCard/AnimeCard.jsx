import React from "react"
import { Button } from "react-bootstrap"
import "./AnimeCard.css"
export default function AnimeCard(props) {
    const desc=props.desc
    return (
        <div className="anime-card">
            <img src={props.image} alt="Anime poster" />
            <h3>{props.title}</h3>
            <p style={{
                textAlign:"start",
                fontWeight:"900"
            }}>Anime Description:</p>
            <p>{desc.slice(0,100)}....</p>
            <div className="details">
               
                <p>Genres: 
                    {
                        props.genre.map(
                            (word,index)=>{
                                return <span>{word} </span>
                            }
                        )
                    }
                </p>
                <p>Episodes: {props.ep}</p>
               
            </div>
        </div>
    )
}