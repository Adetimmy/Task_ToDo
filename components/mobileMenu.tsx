import Ade from "@/asset/ade.jpg" 
import { AiOutlineBell, AiOutlineSetting } from 'react-icons/ai'
import Image from 'next/image'

export const MobileMenu = (menu:any) => {
  return (
    <div className={`xl:hidden flex flex-col trans dark:shadow-inner bg-white shadow-lg   w-2/5 z-50 top-24 absolute ${menu? "right-0":"right-full"} rounded-l-lg`}>
        <div className='mt-4'>
            <div className='flex gap-5 flex-col items-center px-3 py-2'>
                <Image width={90} src={Ade} alt ='user-picture' className='rounded-full aspect-square bg-cover '/>
            </div>
            <div className='flex flex-col items-center justify-between  mt-4 gap-3 text-[#667085]'>
                <div className='flex justify-start gap-1 items-center cursor-pointer w-full text-sm  dark:bg-gray-300 hover:bg-blue-600 hover:text-white px-3 py-2'>
                <AiOutlineSetting size={25}/>
                <p>Settings</p>
                </div>
                <div className='flex justify-start gap-1 items-center mb-2 cursor-pointer w-full text-sm  dark:bg-gray-300 hover:bg-blue-600 hover:text-white px-3 py-2'>
                <AiOutlineBell size={25}/>
                <p>Notifications</p>
                </div> 
            </div>
        </div>
    </div>
  )
}
