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
import { Paginating } from './Pagination'
import EditTaskModal from './EditTaskModal'
import { Add, createNewTaskButton } from './multipleHandleEvent'
import { AddTaskModal } from './addTaskModal'
import { DeleteTaskModal } from './deleteTaskModal'
import { InfinitySpin } from 'react-loader-spinner'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  const {field, message, setField, loading} = useStateContext()


  return (

    <main className="min-h-screen m-0 overflow-hidden relative">
       <ToastContainer />
      <header className='min-w-full h-24  border-b border-[rgba(107, 114, 128, .1)] p-4 xl:px-14 xl:flex justify-between items-center '>
        <div className='flex justify-between items-end xl:items-center h-full'>
          <h3 className='font-bold text-lg'>ToDo</h3>
          <button className='xl:hidden'><HiMenuAlt1 size={26}/></button>
        </div>
        <div className='hidden xl:flex gap-2'>
          <AiFillSetting/>
          <AiFillBell/>
          {/* <Image src={} alt='user-picture' className='rounded-full'/> */}
        </div>
      </header>

      <div className='flex my-4 justify-between xl:px-14 p-4'>
        <div>
          <h3 className="font-semibold text-2xl mb-2">Good {message}!</h3>
          <small className=" text-gray-600 dark:text-gray-400 font-work xl:text-lg text-base">You got some task to do.</small>
        </div>
        <div className="hidden xl:flex self-start justify-end">
            <Icon title='Create New Task' icon={<FaPlus />} type='button' size="full" handle={() => createNewTaskButton(setField)}/>
         </div>
      </div>

      <section className={`flex justify-between`}>
        <aside className='xl:w-4/6 overflow-hidden xl:border-r-[0.5px] xl:pr-8 border-[rgba(255,255,255,.1)] relative '>
          <div className=''>
            <Salutations/>
          </div>
          <div className='font-work xl:mt-1'>
              <h3 className='font-semibold my-3'>My Tasks</h3>
          </div>
          {loading ? 
          <div className='flex justify-center absolute items-center h-screen w-full'>
          <InfinitySpin 
            width='200'
            color="#3F5BF6"
          />
          </div> 
          :
          <>
            
              <Tasks/>
           
            <div className='absolute bottom-0 left-0 right-0 z-40 bg-[#ececec] w-5' >
                <Paginating />
            </div>
          
            <div className='h-14 fixed w-full bottom-0 xl:w-[59%] dark:bg-[#111827] bg-[#fff] z-30'/>
          </>
          }
        </aside>

        <aside className={`hidden  modal xl:flex justify-center  ${field.calendar? "" : 'bg-white ml-3 overflow-y-scroll pb-4 rounded-lg p-4'} ${field.show? `${field.edit? 'h-[450px]' : 'h-[250px]'}` : 'h-[450px]'}`}>
          {
          field.calendar? 
          <DesktopCalendarView />
          :
          field.show? <ModalPopUp/>:<AddTaskModal/>

          }
                  
        </aside>
       
      </section>

      <div className='fixed bottom-7 xl:w-4/6 xl:px-14 w-full px-4 h-[48px] z-30 xl:pr-8'>
        <AddInput />
      </div>
      <div className={`fixed bottom-0 left-0 z-50  trans w-full flex justify-center xl:hidden ${field.show? "h-4/6":"h-0"}`}>{field.show && <ModalPopUp />}</div> 
      
    </main>
  )

} 
