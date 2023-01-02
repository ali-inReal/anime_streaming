import React from 'react';
import NavigationBar from '../../Components/Navbar/Navbar';
import TrendingSlider from '../../Components/TrendingSlider/TrendingSlider';
import Popular from '../../Components/Popular/Popular';
function Home(props) {
    return (
        <div>
            <NavigationBar />
            <TrendingSlider />
            <Popular />
        </div>
    );
}

export default Home;