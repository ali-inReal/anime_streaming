import React, { useContext } from 'react';
import {data} from "../../data/myanimelist.js"
import "./AllAnime.css"
import AnimeCard from "./AnimeCard/AnimeCard"
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Paginate from '../Pagination/Pagination.jsx';
import { UserContext } from '../../Context.jsx';
function AllAnime() {
    const loginData = useContext(UserContext);
    const {login,setLogin} = loginData
    const [anime,setAnime]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPages,setTotalPages]=useState(1);
    useEffect(
        ()=>{
            if(login!=="")
            axios.get(`http://127.0.0.1:3000/anime`,{headers:{
                auth:login
            },params:{start:(currentPage-1)*10}}).then(
                (response)=>{
                    console.log(response.data)
                    setAnime(response.data);
                    console.log(anime)
                  
                }
            )
            axios.get(`http://127.0.0.1:3000/count_anime`,{headers:{
                auth:login
            }}).then(
                (response)=>{
                    console.log(response.data)
                    setTotalPages(response.data.c/10);
                    console.log(anime)
                  
                }
            )
        },[currentPage]
    )
    
    return (
      
        <>
        <h1 className='popular-heading' >All Anime</h1>
        <div className="popular-container">
           
           {
              anime.map(
               (anime,index)=>{
                   return(
                       <>
                         <AnimeCard
                        ep={anime.episodes} _id={anime._id} genre={anime.genre}  desc={anime.synopsis} title={anime.title} image={anime.image} />
                       </>
                   )
               }
              )
           }
       </div>
       <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
       }}>
       <Paginate currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
       {
        console.log(currentPage)
       }
       </div>
       
        </>
      
    );
}

export default AllAnime;