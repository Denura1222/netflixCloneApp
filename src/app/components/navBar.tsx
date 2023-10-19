'use client';
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { BsChevronDown } from "react-icons/bs";
import MenuItem from "./menuItem"
import AccountItem from "./accountItem"
import { useState } from 'react';

const TOP_OFFSET = 66;

const NavBar = () => {
  const [showBackground, setShowBackground] = useState(false);


  
    const router = useRouter()
    const[isVisibleMobile ,setIsVisibleMobile]=useState(false)
    const[isVisibleAccount ,setIsVisibleAccount]=useState(false)


    const onToggle =()=>{
        setIsVisibleMobile((current)=>(!current))
    }

    const onToggleAccount =()=>{
        setIsVisibleAccount((current)=>(!current))
    }

  return (

    <nav className='w-full fixed z-40'>
    
        <div className={`flex flex-row gap-7  mx-10  items-center justify-between`}> 
        <div className='flex flex-row items-center'>
        <img  className='h-[30px] w-[100px] m-5' src="/images/logo.png" alt="Logo" />
        <div className='flex-row gap-7 hidden lg:flex'>
        <h1 className='text-white'>Home</h1>
         <h1  className='text-white'>Series</h1>
         <h1 className='text-white' >Series</h1>
         <h1  className='text-white'>Film</h1>
         <h1 className='text-white'>New and Popular</h1>
         <h1 className='text-white'>My List</h1>
         <h1 className='text-white'>Browse by language</h1>
        </div>

        <div onClick={onToggle} className='lg:hidden flex flex-row gap-2 items-center'> 
        
        <h1 className='text-white mb-3'>Browse</h1>
        <BsChevronDown className='text-white w-4 mb-2 '/>

      
        <MenuItem visible={isVisibleMobile}/>

        </div>
        
        </div>
        
        <div onClick={onToggleAccount} className='flex flex-row gap-3 items-center'>
        <img  className='w-[50px] h-[50px]' src="/images/default-blue.png" alt="" />
        <BsChevronDown className={`text-white w-4 mb-2  transition ${isVisibleAccount? 'rotate-180':'rotate-0'}`}/>

        <AccountItem visible={isVisibleAccount}/>
            
        </div>
        

        
        </div>
        </nav>

  
  )
}

export default NavBar