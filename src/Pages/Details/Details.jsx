import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from '../../Components/Navbar/Navbar';
import { Rating } from '@mui/material';
import "./Details.css"
import { useContext } from 'react';
import { UserContext } from '../../Context';
function Details(props) {

    const [animeData, setAnimeData] = useState([{}]);
    const state = useLocation();
    const loginData = useContext(UserContext);
    const navigate = useNavigate();
    const { login, setLogin } = loginData

    
    useEffect(
        () => {

            if (login == "") {
                navigate('/login');
            }
            else {
                axios.get('http://127.0.0.1:3000/anime_id', {headers:{
                    auth:login
                }, params: { _id: state.state.id } })
                    .then(
                        (response) => {
                            // console.log(response.data);
                            console.log(response.data[0].genre);
                            response.data[0].genre = response.data[0].genre.slice(1, response.data[0].genre.length - 1);
                            response.data[0].genre = response.data[0].genre.split(',');
                            console.log(response.data[0].rating);
                            setAnimeData(response.data);
                        }
                    )
            }
        }, []
    )
    return (

        <div className='detail-container'>
            <NavigationBar />
            <div className='details-banner'>
                <div className='details-image' >
                    <img src={animeData[0].image} alt="" />
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} >
                        <h3>Rating :</h3>
                        <Rating precision={0.5} value={animeData[0].rating / 2} readOnly size="large" />
                    </div>
                    <div>
                        <h3>Rank : {animeData[0].rank}</h3>
                    </div>
                    <div>
                        <h3>Episodes : {animeData[0].episodes}</h3>
                    </div>
                </div>
                <div className='details-text'>
                    <h1>{animeData[0].title}</h1>
                    <p>{animeData[0].synopsis}</p>
                    <div className="genre-container">
                        {animeData[0].genre ? animeData[0].genre.map(
                            (genre) => {
                                return (
                                    <p className='genre-item'>{genre.trim().slice(1, genre.trim().length - 1)}</p>
                                )
                            }
                        ) : ""}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Details;