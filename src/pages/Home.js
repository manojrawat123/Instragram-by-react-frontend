import { useEffect, useState } from 'react';
import MyPost from './MyPost';
import image1 from '../img/robot-bg.jpg';



const Home = () => {
 
   const [user_det, setUser] = useState([""])
  useEffect(()=>{
    const res = fetch("http://127.0.0.1:8000/apiview/").then((value)=>{
      return value.json()
    }).then((value)=>{
      setUser(value)
    })
    
  }, [user_det])
  

  return (

    <>



    <MyPost />
    <div className='flex-col my-8 mx-[4rem] col-span-2'>
      <div className='flex'>
      <img src={image1} className='rounded-[50%] h-[3rem] w-[3rem]'/>
      <span className='text-[.7rem] font-semibold'>
        <div >&nbsp;  positive.mind.123456789@gmail.com</div>
        <div> &nbsp; Manoj</div>
        </span>
      <span className='text-blue-500 text-sm ml-auto'>Switch</span>
      </div>
      

      <div className='flex text-sm font-semibold my-[2rem]'><span>Suggested For You</span>
      
      <span className='ml-auto'>See All</span>
       </div>



      {user_det.map((element, index)=>{
        

        return <div className='flex my-4'>
        <img src={ element.img} className='rounded-[50%] h-[2rem] w-[2rem]'/>
        <span className='text-[.7rem] font-semibold'>
          <div >&nbsp;  {element.name}</div>
          <div> &nbsp; Follows You</div>
          </span>
        <span className='text-blue-500 text-sm ml-auto'>Follow</span>
        </div>
      })}
 
       



      
    </div>



    </>

  )
}

export default Home