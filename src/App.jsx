import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Banner from './components/homepage/banner/Banner';
import Players from './components/homepage/players/Players';
import { ToastContainer } from 'react-toastify';
import Footer from './components/homepage/players/SelectedPlayers/Footer';
import MainComponent from './components/MainComponent';

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

 

const playersPromise = fetchPlayer();

  return (
    <>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
   <MainComponent playersPromise={ playersPromise}>

   </MainComponent>
   </Suspense>
    </>
  )
}

export default App
