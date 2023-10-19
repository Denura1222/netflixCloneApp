import React from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

interface MenuItemProps {
    visible: boolean

}

const AccountItem: React.FC<MenuItemProps> = ({
    visible
}) => {

    if (!visible) {
        return null
    }
    return (
        <div className='absolute py-5 w-50 top-20 left-30 right-16 border-2 border-gray-600 bg-black p-2 text-center'>
            <div className='flex flex-col gap-3'>

                <div className='flex flex-row gap-2 items-center justify-start px-3'>    
                    <img className='w-[40px] h-[40px]' src="/images/default-blue.png" alt="" />
                    <h1 className='text-white hover:underline'>username</h1>
                </div>
                <hr className='bg-gray-600  border-0 h-px my-4'/>
                <div>
                <h1 onClick={()=>signOut()} className='text-white hover:underline'>Sign out of Netflix</h1>

                
                </div>




            </div>




        </div>
    )
}

export default AccountItem