'use client'
import Salutations from '@/components/salutations'
import Tasks from '@/components/tasks'
import {HiMenuAlt1} from 'react-icons/hi'
import { AddInput } from './addTaskInputField'
import { ModalPopUp } from './modal'
import { useStateContext } from '@/context/useContext'
import { AiFillBell, AiFillSetting } from 'react-icons/ai'
import { Icon } from './CTAbtn'
import { FaPlus } from 'react-icons/fa'
import { DesktopCalendarView } from './dektopCalendarView'
import { Pagination } from '@mui/material'
import { ChangeEvent } from 'react'

export default function Home() {
  const {field, message, setPage} = useStateContext()


  return (

    <main className="min-h-screen overflow-hidden relative">

      <header className='min-w-full h-24  border-b border-[rgba(107, 114, 128, .1)] p-4 lg:px-14 lg:flex justify-between items-center '>
        <div className='flex justify-between items-end lg:items-center h-full'>
          <h3 className='font-bold text-lg'>ToDo</h3>
          <button className='lg:hidden'><HiMenuAlt1 size={26}/></button>
        </div>
        <div className='hidden lg:flex gap-2'>
          <AiFillSetting/>
          <AiFillBell/>
          {/* <Image src={} alt='user-picture' className='rounded-full'/> */}
        </div>
      </header>

      <div className='flex my-4 justify-between lg:px-14 p-4'>
        <div>
          <h3 className="font-semibold text-2xl mb-2">Good {message}!</h3>
          <small className=" text-gray-600 dark:text-gray-400 font-work lg:text-lg text-base">You got some task to do.</small>
        </div>
        <div className="hidden lg:flex self-start justify-end">
            <Icon>
              <FaPlus />
              Create New Task
            </Icon>
        </div>
      </div>

      <section className='flex justify-between'>
        <aside className='lg:w-4/6 overflow-hidden lg:border-r-[0.5px] lg:pr-8 border-[rgba(255,255,255,.1)]   lg:h-[37vh] relative '>
          <div className='lg:fixed lg:w-7/12'>
            <Salutations/>
          </div>
          
          <div className='font-work lg:mt-28 lg:overflow-y-hidden'>
            <h3 className='font-semibold my-3'>My Tasks</h3>
            <Tasks/>
          </div>
        </aside>

        <aside className='hidden lg:inline'>
          <DesktopCalendarView />
        </aside>
      </section>

      <div className='fixed bottom-7 lg:w-4/6 lg:px-14 w-full px-4 h-[48px]'>
          <Pagination count={10} color='primary' variant='text' size="large" className='hidden lg:inline'
              onChange={(event: ChangeEvent<any>, page:number) => {
                const num:any = event.target?.value || page
                
               setPage((num * 10) - 1)
               }}
              />
        <AddInput />
        </div>
      <div className={`fixed bottom-0 left-0  trans w-full lg:hidden ${field.show? "h-4/6":"h-0"}`}>{field.show && <ModalPopUp />}</div> 

    </main>
  )

} 