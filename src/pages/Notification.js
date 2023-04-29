import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Instagram } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const MyNotification = () => {

  const [userNotification, setUserNotification] = useState([""])
  useEffect(()=>{
    const res = fetch("http://127.0.0.1:8000/getmessageapi/").then((value)=>{
      return value.json()
    }).then((value)=>{
      setUserNotification(value)
    })
  }, [userNotification])

  return (
    
<>



    {/* <div className='flex-col justify-center border-r border-solid w-[6rem] ml-4'>
      <div className='mb-[4.5rem] mt-12  rounded-xl px-4 w-[4rem]'> <Instagram></Instagram> </div>
      <NavLink to={"/"}  className={'py-8 my-4'} >  <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]'  ><CottageIcon></CottageIcon></div> </NavLink>
        <NavLink to={"/search"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]' ><SearchIcon></SearchIcon></div> </NavLink>
        <NavLink to={"/explore"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4  w-[4rem]' ><ExploreOutlinedIcon></ExploreOutlinedIcon></div></NavLink>
        <NavLink to={"/reels"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]' ><MovieCreationOutlinedIcon></MovieCreationOutlinedIcon></div></NavLink>
        <NavLink to={"/message"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]' ><MapsUgcOutlinedIcon></MapsUgcOutlinedIcon></div></NavLink>
        <NavLink to={"/notification"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]' ><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></div></NavLink>
        <NavLink to={"/create"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]' ><AddBoxOutlinedIcon></AddBoxOutlinedIcon></div></NavLink>
        <NavLink to={"/profile"} className='py-8 my-4'> <div className='py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]' ><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></div></NavLink>


<div className="mt-[4rem]">
  <div className="py-3 my-2 hover:bg-gray-200 rounded-xl px-4 w-[4rem]">
  <DensityMediumIcon></DensityMediumIcon>
  </div>
</div>


    </div> */}



      {/* Search Start */}
      
      <div className='flex-col col-span-2 '>
      <div className='w-[]'>
        <h1 className='text-3xl font-semibold my-4'>Notifications</h1>
        <h2 className='font-semibold text-xl'>This Month</h2>
      </div>
      <hr/>
        {/* User we search */}
        {userNotification.map((element, index)=>{
        

        return  <div className='flex my-4 mx-2'>
        <img src={`http://127.0.0.1:8000`+element.img} className='rounded-[50%] h-[3rem] w-[3rem]'/>
        <div className=' '> 
          <div className="font-semibold">&nbsp;  {element.name}</div>
         <div className='text-sm'>&nbsp; Started following you</div>
          </div>
          <div className='ml-auto'>
           <button className='px-4 py-2 font-semibold bg-blue-500 rounded-xl text-white hover:bg-blue-700'>Follow</button>
          </div>

         
        </div>
      })}
        {/* End of User we search */}

      </div>


      {/* Search End */}
<div className="col-span-auto">

</div>




      </>











  )
}

export default MyNotification