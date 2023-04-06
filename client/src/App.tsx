import { useState } from 'react'
import './styles/globals.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Recipes from './components/Recipes';

function App() {
  const [trigger, setTrigger] = useState(false);
  const [isLanding, setIsLanding] = useState<boolean>(true);

  return (
    <div className="w-screen h-auto md:h-screen bg-green-200">
      <Navbar />
      { isLanding
        ?
        <div
          style={{backgroundImage: `url('pantry-hero.png')`}}
          className="max-w-[1240px] w-full h-screen md:h-full mx-auto pt-16"
        >
          <div
            className='w-full h-full flex justify-center items-center bg-black bg-opacity-50'
          >
            <div className='h-[450px] w-[400px] flex flex-col items-center justify-start text-white'>
              <h1 className='text-[70px] uppercase font-bold'>Pantry</h1>
              <h2 className='p-4'>Pantry is a web app that helps users manage their pantry inventory and find recipes using ingredients they already have at home. With a simple interface and easy-to-use features, Pantry makes meal planning and grocery shopping a breeze.</h2>
              <div className='h-[100px] w-[200px] flex items-center justify-center'>
                <div
                  onClick={() => setIsLanding(false)}
                  className='h-[50px] w-[150px] flex items-center justify-center bg-gray-500 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-opacity-75'
                >
                  <p>Get started!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <Routes>
          <Route path='/' element={<Home trigger={trigger} setTrigger={setTrigger} />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/recipes' element={<Recipes trigger={trigger} setTrigger={setTrigger} />}></Route>
        </Routes>
      }
    </div>
  );
}

export default App;
