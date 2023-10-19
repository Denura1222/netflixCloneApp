import React from 'react'

interface MenuItemProps {
    visible:boolean

}

 const MenuItem:React.FC<MenuItemProps> = ({
    visible
 }) => {

    if(!visible){
        return null
    }
    
  return (
    <div className= 'absolute py-5 w-50 top-14 left-50 border-2 border-gray-600 bg-black p-2 text-center'>

        <div className='text-white hover:underline px-5'>Home</div>
        
        <div className='text-white hover:underline'>Series</div>
        
        <div className='text-white hover:underline'>Films</div>
        
        <div className='text-white hover:underline'>New & popular</div>
        
        <div className='text-white hover:underline'>My List</div>
        
        <div className='text-white hover:underline'>browse by language</div>
        
    </div>
  )
}

export default MenuItem
