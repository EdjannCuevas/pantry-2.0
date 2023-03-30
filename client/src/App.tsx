// import { useState } from 'react'
import './styles/globals.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';

function App() {
  // const [users, setUsers] = useState([]);

  return (
    <div className="w-screen h-screen bg-[#dbe8dc]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
