"use client";

import React from 'react'
import { useForm, SubmitHandler,FieldValue } from "react-hook-form"
import  useRegisterModal  from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useCallback, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import useLoginModal from '@/app/hooks/useLoginModal';

interface registerProps{
    isOpen?:boolean
}



const registerModal:React.FC<registerProps> = ({
    isOpen
}) => {

    const [isLoading, setIsLoading] = useState(false);
    
  
    const {register,handleSubmit,watch,formState:{errors,},} = useForm({
      defaultValues:{
        email:'',
        name:'',
        password:'' 
      }
    })

    const registers = useRegisterModal()
     const login = useLoginModal()
    const OnSubmit = handleSubmit((data) =>{

  
        setIsLoading(true);
        
      
        axios.post('/api/register', data)
        .then(() => {
          toast.success('Registered!');
          console.log("registerd")
       
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        })
        
      })

      const update=()=>{
        login.onOpen();
        registers.onClose()


    }
  return (

    registers.isOpen ?(
        <div >

        <div className='flex w-full h-full justify-center items-center'>
        <div className='w-[350px] h-[400px] bg-black bg-opacity-70 self-center'>

          <div className='font-semibold text-[30px] p-3  text-white'>Sign in</div>

          <div> 

            <form onSubmit={OnSubmit} className='p-7 flex flex-col gap-4'>
              
              <input disabled={isLoading} required id='email'{...register("email")} type="text" placeholder='email' className=' rounded-md  bg-gray-600 p-2 placeholder-slate-300 '/>
              <input  disabled={isLoading} required id='name'{...register("name")} type="text" placeholder='name' className=' rounded-md  bg-gray-600 p-2  placeholder-slate-300'/>
              <input  disabled={isLoading} required id='password' {...register("password")} type="password" placeholder='Password' className=' rounded-md p-2  placeholder-slate-300 bg-gray-600'/>

            <button disabled={isLoading} type='submit' className='bg-red-600 rounded-md p-3 text-white mt-2'>Login</button>
            </form>
          
          </div>
          <div className='flex flex-row px-7 gap-1'>
                <h1 className='text-white'>Have an account?</h1>
                <span onClick={update} className='cursor-pointer font-semibold text-white hover:opacity-30'>Sign in</span>
            
            </div>
            
        </div>
        </div>
       
    </div>
    ):null
    
  )
}

export default registerModal