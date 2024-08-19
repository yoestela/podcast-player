import { useState } from 'react'
import Navbar from './componentes/Navbar.jsx';
import Lista from './componentes/Listado.tsx';


function App() {
  return (
    <div className="bg-black">
    <Navbar/>
    <Lista/>
    <div className="h-screen"></div>
    </div>
  );
}


export default App;
