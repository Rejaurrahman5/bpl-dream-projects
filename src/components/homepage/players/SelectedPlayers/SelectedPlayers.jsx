import React from 'react';
import Players from '../Players';
import SelectedCard from '../AvailablePlayers/ui/SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {

const handleDeleteSelectedPlayer = (player)=> {
   console.log(selectedPlayers);
   const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName)
   console.log(filteredPlayers);
   setSelectedPlayers(filteredPlayers);
   setCoin(coin + player.price)
}

    // console.log( selectedPlayers);
    return (
       <div>
         <div className='space-y-4'>
            {selectedPlayers.length === 0 ? 
            <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
               <h2 className='font-semibold text-xl'>No players selected yet</h2>
               <p className=''>Go to Available tab to select players</p>
            </div>
           : selectedPlayers.map((player, ind) => (
             <SelectedCard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
            ))
            
        }
        </div>
       </div>
    );
};

export default SelectedPlayers;