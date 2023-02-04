import React from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./AnimeCard.css"
export default function AnimeCard(props) {
    const desc = props.desc;
    const navigate = useNavigate();
    function clickHandler()
    {
        console.log(props._id)
        navigate('/details',{state:{id:props._id}});
    }
    return (
        <div onClick={()=>{clickHandler()}} style={{
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