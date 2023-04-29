import image1 from '../img/robot-bg.jpg';
import image2 from '../img/stock-bg.jpg';
import image3 from '../img/image1_files/geeky1.jpg.jpg';
import post1 from '../img/image1_files/post2.webp';
import post2 from '../img/image1_files/post3.jpg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendIcon from '@mui/icons-material/Send';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect } from 'react'

const MyPost = () => {
  return (
    <>
    <div className='col-span-3'>
    <div className='flex my-8 mx-[4rem] space-x-4'>
      <div>
        <img src={image1} className='rounded-[50%] h-[3rem] w-[3rem]'/>
        <span>tanveer.....</span>
      </div>
      <div>
        <img src={image2} className='rounded-[50%] h-[3rem] w-[3rem]'/>
        <span>paras_i_p....</span>
      </div>
      </div>  




      <div className="flex-col justify-center w-[55vw] h-[70vh] mt-8 ml-[8rem]">
        <div className="w-[60%]">
        <div className="flex">
        <img src={image3}  className='h-[2rem] w-[2rem] rounded-[50%]'/>
        <span>geekyshows1 - 11h</span>
        
        <div className='ml-auto pr-4'><MoreHorizIcon></MoreHorizIcon></div>
        </div>
        </div>
        
        <img src={post1}  className='w-[60%] mb-[1rem]'/>
        
        <div className="w-[60%]">
        <div className="flex">

        <FavoriteBorderOutlinedIcon className='mx-1'></FavoriteBorderOutlinedIcon>
        <SendIcon className='mx-1'></SendIcon>
        <MoreHorizIcon className='mx-1'></MoreHorizIcon>
        <div className='ml-auto pr-4'><TurnedInIcon></TurnedInIcon>  </div>
        </div>
        </div>
      </div>
      <br/>
        <br/>



    
        <div className="flex-col justify-center w-[55vw] h-[70vh] mt-8 ml-[8rem]">
        <div className="w-[60%]">
        <div className="flex">
        <img src={image3}  className='h-[2rem] w-[2rem] rounded-[50%]'/>
        <span>geekyshows1 - 11h</span>
        
        <div className='ml-auto pr-4'><MoreHorizIcon></MoreHorizIcon></div>
        </div>
        </div>
        
        <img src={post1}  className='w-[60%] mb-[1rem]'/>
        
        <div className="w-[60%]">
        <div className="flex">

        <FavoriteBorderOutlinedIcon className='mx-1'></FavoriteBorderOutlinedIcon>
        <SendIcon className='mx-1'></SendIcon>
        <MoreHorizIcon className='mx-1'></MoreHorizIcon>
        <div className='ml-auto pr-4'><TurnedInIcon></TurnedInIcon>  </div>
        </div>
        </div>
      </div>
      <br/>
        <br/>



      
      <div className="flex-col justify-center w-[55vw] h-[70vh] mt-8 ml-[8rem]">
        <div className="w-[60%]">
        <div className="flex">
        <img src={image3}  className='h-[2rem] w-[2rem] rounded-[50%]'/>
        <span>geekyshows1 - 11h</span>
        
        <div className='ml-auto pr-4'><MoreHorizIcon></MoreHorizIcon></div>
        </div>
        </div>
        
        <img src={post1}  className='w-[60%] mb-[1rem]'/>
        
        <div className="w-[60%]">
        <div className="flex">

        <FavoriteBorderOutlinedIcon className='mx-1'></FavoriteBorderOutlinedIcon>
        <SendIcon className='mx-1'></SendIcon>
        <MoreHorizIcon className='mx-1'></MoreHorizIcon>
        <div className='ml-auto pr-4'><TurnedInIcon></TurnedInIcon>  </div>
        </div>
        </div>
      </div>
      <br/>
        <br/>







    </div>
    

    
    </>
  )
}

export default MyPost