import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button';
import { useState } from 'react';
import Count from './components/Count';

function App() {

  console.log("se renderiza app")
 
  return (
    <>
      <NavBar />
      <h3>Paleta de iluminadores</h3>
      <Count />
      <h3>Brochas</h3>
      <Count />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </>
    
  );
}

export default App
