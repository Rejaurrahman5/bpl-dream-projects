import React, { use, useState } from 'react';
import Navbar from './navbar/Navbar';
import Banner from './homepage/banner/Banner';
import Players from './homepage/players/Players';
import Footer from './homepage/players/SelectedPlayers/Footer';
import { ToastContainer } from 'react-toastify';

const MainComponent = ({ playersPromise}) => {
     const players = use(playersPromise);
     const [coin, setCoin] = useState(50000);
    return (
        <div>
             <Navbar coin={coin}></Navbar>
    <Banner></Banner>
   
    <Players players={players} coin = {coin} setCoin={setCoin}></Players>
    
    <Footer></Footer>
    
    
    {/* {react toastify} */}
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainComponent;