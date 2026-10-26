import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Banner from './components/homepage/banner/Banner';
import Players from './components/homepage/players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const [coin, setCoin] = useState(50000);

const playersPromise = fetchPlayer();

  return (
    <>
    
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Players playersPromise={playersPromise} coin = {coin} setCoin={setCoin}></Players>
    </Suspense>
    
    {/* {react toastify} */}
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
