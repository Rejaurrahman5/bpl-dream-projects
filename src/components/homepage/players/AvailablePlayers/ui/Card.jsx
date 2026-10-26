
import { useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    console.log(player.price);

     const [isSelected, setIsSelected] = useState(false);

     const handleChoosePlayer = ()=> {

    let newCoin = coin - player.price;
        if (newCoin >= 0){
           setCoin(coin - player.price)
        }else{
            toast.error("Not enough coin to purchase this player");
            return;
        }

        toast.success(`${player.playerName} is selected`);
        setIsSelected(true); 
        setSelectedPlayers([...selectedPlayers, player])
    }

    return (
        <div className="border p-4 rounded-lg shadow-sm bg-white">

            {/* প্লেয়ারের ছবি */}
            <div className="mb-3">
                <img
                    src={player.playerimg}
                    alt={player.playerName}
                    className="w-full h-48 object-cover rounded-md"
                />
            </div>

            {/* প্লেয়ারের নাম */}
            <div className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-1">
                <FaUser className="text-gray-500 text-sm" />
                <span>{player.playerName}</span>
            </div>

            {/* দেশের নাম ও প্লেয়ারের টাইপ */}
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2 border-b pb-2">
                <div className="flex items-center gap-1.5">
                    <FaFlag className="text-gray-400 text-xs" />
                    <span>{player.playerCountry}</span>
                </div>

                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                    {player.playerType}
                </span>
            </div>

            {/* রেটিং */}
            <div className="font-bold text-gray-800 text-sm mb-1">
                Rating: {player.rating}
            </div>

            {/* ব্যাটিং ও বোলিং স্টাইল */}
            <div className="flex justify-between items-center text-xs text-gray-600 my-1">
                <span className="font-semibold">
                    Bat: {player.batingStyle}
                </span>

                <span>
                    Bowl: {player.bowingStyle}
                </span>
            </div>

            {/* প্রাইস ও বাটন */}
            <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-sm text-gray-900">
                    Price: ${player.price}
                </span>

                <button onClick={handleChoosePlayer} disabled={isSelected} className="btn btn-sm bg-white border border-gray-300 hover:bg-gray-100">
                   {isSelected ? "Selected" :"Choose Player"}
                </button>
            </div>

        </div>
    );
};

export default Card;
