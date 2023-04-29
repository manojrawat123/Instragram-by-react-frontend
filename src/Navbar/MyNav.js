import React from 'react'
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined'; 
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { Logout } from '@mui/icons-material';










const MyNav = () => {
  const [myClassName, setMyClassName] = useState("block") 
  const [display , setDisplay] = useState("hidden")

  const my_handle_click = ()=>{
    if (display === "hidden"){
      setDisplay("block")
      
    }
    else{
      setDisplay("hidden")
    }
  }

  useEffect(()=>{
    if ( myClassName === "hidden"){
      // setMyClassName("block")
    }
  })
  const handleClick = ()=>{
    setMyClassName("hidden")
  }
  return (
    <>
{/* <div className={myClassName}> */}
    
    <div className=' col-span-1 mx-8 items-center border-r' >
      
<div className='flex-col fixed'>
<div className='mb-[4.5rem] mt-12'> <i> Instagram </i></div>
<NavLink to={"/"}  className='py-8 my-4'>  <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12' >   <CottageIcon></CottageIcon> Home  </div></NavLink>
<NavLink to={"/search"} className='py-8 my-4' onClick={handleClick}> <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'>  <SearchIcon></SearchIcon> Search </div></NavLink>
<NavLink to={"/explore"} className='py-8 my-4'>  <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'>  <ExploreOutlinedIcon></ExploreOutlinedIcon> Explore </div></NavLink>
<NavLink to={"/reels"} className='py-8 my-4'>  <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'> <MovieCreationOutlinedIcon></MovieCreationOutlinedIcon> Reels</div> </NavLink>
<NavLink to={"/message"} className='py-8 my-4'>  <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'> <MapsUgcOutlinedIcon></MapsUgcOutlinedIcon> Messages </div> </NavLink>
<NavLink to={"/notification"} className='py-8 my-4'>  <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'>   <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon> Notifications </div> </NavLink>
<NavLink to={"/create"} className='py-8 my-4'> <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'>   <AddBoxOutlinedIcon></AddBoxOutlinedIcon> Create </div> </NavLink>
<NavLink to={"/profile"} className='py-8 my-4'>    <div className='py-2 my-4 hover:bg-gray-200 rounded-xl pl-2 pr-12'>  <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon> Profile </div> </NavLink>
<div className={'z-[1000] fixed bg-white bottom-16 shadow-2xl border mx-2 ' + display}>
    <div className='my-8 px-[3rem]'>Switch Account</div>
    <div className='my-8 px-[3rem]'>Switch Account</div>
    <div className='my-8 px-[3rem]'>Switch Account</div>
    <div className='my-8 px-[3rem]'>Switch Account</div>
    <div className='my-8 px-[3rem]'>Switch Account</div>
    <div className='my-8 px-[3rem]'>Switch Account</div>
    <div className='my-8 px-[3rem]'><Logout></Logout> Logout</div>
  </div>
      <div className="mt-[5rem] hover px-2 py-2 my-4 hover:bg-gray-200 rounded-3xl" onClick={my_handle_click} >
       
  <div className="" >
  <DensityMediumIcon></DensityMediumIcon> More

  
  </div>
  
</div>


     </div>
      </div>
      {/* </div> */}
    </>
  )
}


export default MyNav
