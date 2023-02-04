import React, { useContext, useEffect } from 'react';
import NavigationBar from '../../Components/Navbar/Navbar';
import TrendingSlider from '../../Components/TrendingSlider/TrendingSlider';
import AllAnime from '../../Components/AllAnime/AllAnime';
import { UserContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
function Home(props) {
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
    return (
        <div>
            <NavigationBar />
            <TrendingSlider />
            <AllAnime />
        </div>
    );
}

export default Home;