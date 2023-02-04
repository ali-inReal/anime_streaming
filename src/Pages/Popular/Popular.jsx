import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimeCard from '../../Components/AllAnime/AnimeCard/AnimeCard';
import NavigationBar from '../../Components/Navbar/Navbar';
import Paginate from '../../Components/Pagination/Pagination';
import { UserContext } from '../../Context';

function Popular(props) {
    const [animeData,setAnimeData]=useState();
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPages,setTotalPages]=useState(1);
    const loginData = useContext(UserContext);
    const {login,setLogin} = loginData;
    const navigate = useNavigate();
    useEffect(
        ()=>{
           if(login == "")
           {
              navigate('/login');
           }
        },[]
    )
    useEffect(
        ()=>{
           axios.get('http://127.0.0.1:3000/popular',{headers:{
            auth:login
        },params:{start:(currentPage*10)-1}}).then
           (
            (response)=>{
                setAnimeData(response.data);
            }
           )
           axios.get('http://127.0.0.1:3000/count_popular_anime',{headers:{
            auth:login
        }}).then
           (
            (response)=>{
                setTotalPages(Math.floor(response.data.c/10));
            }
           )
        },[currentPage]
    )

    return (
        <div>
            <NavigationBar/>
            <div  style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            }}>
            <h1 style={{
                margin:"2rem"
            }}>Popular Anime</h1>
            <div style={{
                display:"flex",
                alignItems:"cente",
                justifyContent:"center",
                gap:"2rem",
                flexWrap:"wrap"
            }}>
                {
                    animeData?animeData.map(
                        (anime)=>{
                            return (
                                <AnimeCard  ep={anime.episodes} _id={anime._id} genre={anime.genre}  desc={anime.synopsis} title={anime.title} image={anime.image} />
                            )
                        }
                    ):""
                }
                
            </div>
            <Paginate totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            
            
        </div>
    );
}

export default Popular;