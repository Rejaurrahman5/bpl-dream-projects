import React from 'react';
import { FaUser, FaFlag } from "react-icons/fa";
import Card from "./ui/Card"
const AvailablePlayers = ({ Players,coin,setCoin, selectedPlayers, setSelectedPlayers }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Players && Players.map((player, ind) => (
               <Card key={ind} player={player} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></Card>
            ))}
        </div>
    );
};

export default AvailablePlayers;

