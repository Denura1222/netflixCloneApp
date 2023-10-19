"use client";

import fetcher from "../libs/fetcher";
import useSWR from 'swr'

import React from 'react'

const useBillboard = () => {
    
    const {data,isLoading,error } = useSWR('/api/billboard', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,

    })
    return {data,isLoading,error }
}
 export default useBillboard

