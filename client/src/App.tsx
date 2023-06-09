import { useState } from 'react'
import './styles/globals.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Recipes from './components/Recipes';
import Hero from './components/Hero';

function App() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="w-screen h-auto md:h-screen bg-green-200">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/home' element={<Home trigger={trigger} setTrigger={setTrigger} />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/recipes' element={<Recipes trigger={trigger} setTrigger={setTrigger} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
