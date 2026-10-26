import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise, coin, setCoin}) => {
    // console.log(playersPromise);
    const Players = use(playersPromise);
    // console.log(Players);

    const [selectedType, setSelectedType] = useState("available");
    // console.log(selectedType);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto my-[50px]'>
           <div className='flex justify-between gap-4 items-center mb-[20px]'>
            {selectedType === "available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players({selectedPlayers.length}/{Players.length})</h2>}
            <div>
                <button 
                onClick={() => setSelectedType("available")}
                className={`btn ${selectedType === "available" ? 'bg-[#E7FE29]' :""}  rounded-r-none rounded-l-xl`}>Available</button>

                <button
                 onClick={() => setSelectedType("selected")}
                className={`btn ${selectedType === "selected" ? 'bg-[#E7FE29]' : ""}  rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
            </div>
           </div>

            {selectedType ==="available" ? <AvailablePlayers Players ={Players} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>
            : <SelectedPlayers
             selectedPlayers={selectedPlayers}
             setSelectedPlayers={setSelectedPlayers} 
             coin={coin}
             setCoin={setCoin}
             ></SelectedPlayers>}
        </div>
    );
};

export default Players;