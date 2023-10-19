"use client";

import React from 'react'
import { useForm, SubmitHandler,FieldValue } from "react-hook-form"
import  useRegisterModal  from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useCallback, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import LoginModal from './components/loginModal';
import RegisterModal from './components/registerModal';
import useLoginModal from '../hooks/useLoginModal';




const Auth = () => {

  
   

  return (
    <div  className=" flex justify-center relative h-full w-full bg-[url('/images/hero.jpg')]">
        <LoginModal />
        <RegisterModal/>

    </div>

    
  )
}

export default Auth  