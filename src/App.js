import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyNav from './Navbar/MyNav';
import MyExplore from './pages/Explore';
import MySearch from './pages/Search';
import Reels from './pages/Reels';
import MyMessage from './pages/Message';
import MyNotification from './pages/Notification';
import MyCreate from './pages/Create';
import MyProfile from './pages/Profile';
const App = () => {
  return (
    <>
    <div className='grid grid-cols-6'>
    <MyNav />
    <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/search" element={<MySearch />}></Route>
            <Route path="/explore" element={<MyExplore />}></Route>
            <Route path="/reels" element={<Reels />}></Route>
            <Route path="/message" element={<MyMessage />}></Route>
            <Route path="/notification" element={<MyNotification />}></Route>
            <Route path="/create" element={<MyCreate />}></Route>
            <Route path="/profile" element={<MyProfile />}></Route>
        </Routes>

        </div>
    </>
  );
}

export default App