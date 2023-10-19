
"use client";

import useSWR from 'swr'
import fetcher from '../libs/fetcher';


const useFavorites = () => {

  const {data,error,isLoading} = useSWR('/api/getFavoritesbyUid',fetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
})


  return {
    data,error,isLoading
  }

  

}

export default useFavorites