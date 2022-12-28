import React from 'react';
import {data} from "./../../data/myanimelist.js"
import "./Popular.css"
import AnimeCard from "./AnimeCard/AnimeCard"
function Popular() {
   
    return (
      
        <>
        <h1 className='popular-heading' >Popular Anime</h1>
        <div className="popular-container">
           
           {
              data.map(
               (anime,index)=>{
                   return(
                       <>
                         <AnimeCard
                        ep={anime.episodes} genre={anime.genre}  desc={anime.synopsis} title={anime.title} image={anime.img_url} />
                       </>
                   )
               }
              )
           }
       </div>
        </>
      
    );
}

export default Popular;