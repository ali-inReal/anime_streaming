import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../../Components/Navbar/Navbar';
import "./search.css"
import search from "./../../assets/search-img.png"
import bg from "./../../assets/bg.png"
import luffy from "./../../assets/luffy.png"
import axios from 'axios';
import AnimeCard from "../../Components/AllAnime/AnimeCard/AnimeCard"
import { UserContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
function Search(props) {
    const [title, setTitle] = useState("");
    const [animeData, setAnimeData] = useState();
    const loginData = useContext(UserContext);
    const {login,setLogin}=loginData;
    const navigate = useNavigate();
    useEffect(
        ()=>{
            if(login == "")
            {
                navigate("/login");
            }
        },[]
    )
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get("http://127.0.0.1:3000/search/", {headers:{
            auth:login
        }, params: { title: title } }).then(
            (res) => {
                console.log(res);
                setAnimeData(res.data);
            }
        )
    }
    return (
        <div className='search-container'>
            <NavigationBar />
            <form id="search" onSubmit={(e) => submitHandler(e)}>
                    <input id="input" onChange={(e) => { setTitle(e.target.value) }} placeholder="Search..." />
                    <img src={search} alt="" />
                </form>
            <div className="search-input-container">
                
                <div className="bg">

                    {
                        animeData ? animeData.length > 0 ? animeData.map(
                            (anime) => {
                                return (
                                    <AnimeCard
                                        ep={anime.episodes} _id={anime._id} genre={anime.genre} desc={anime.synopsis} title={anime.title} image={anime.image} />
                                )
                            }
                        ) : <div style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column"
                        }}>
                                 <h3>No results Found</h3>
                                 <img width={"50%"} height={"50%"} src={luffy} alt="" />
                            </div> : <img src={bg} alt="" />
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;