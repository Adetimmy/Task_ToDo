'use client'
import Salutations from '@/components/salutations'
import Tasks from '@/components/tasks'
import {HiMenuAlt1} from 'react-icons/hi'
import Input from './input'
import Frame from './modal'
import { useStateContext } from '@/context/useContext'

export default function Home() {
  const {field} = useStateContext()

  return (
    <main className="flex min-h-screen w-full overflow-hidden flex-col relative ">
      <header className='min-w-full h-24  border-b border-gray-500 p-4 md:px-14 '>
        <div className='flex justify-between items-end md:items-center h-full'>
          <h3 className='font-bold text-lg'>ToDo</h3>
          <button className='md:hidden'><HiMenuAlt1 size={26}/></button>
        </div>
      </header>

      
    <div className='md:w-4/6'>
   {/*this salutation handles the greeting and the floating date  */}
      <section>
        <Salutations />
      </section>
      
      <section className='font-work mt-5'>
        <h3 className='font-semibold my-3'>My Tasks</h3>
        <Tasks/>
      </section>
      <div className='fixed bottom-7 md:w-4/6 md:px-14 w-full px-4 h-[48px]'><Input/></div>
    </div>
   <div className={`fixed bottom-0 left-0  trans w-full md:hidden ${field.show? "h-4/6":"h-0"}`}>{field.show && <Frame />}</div> 
   </main>
  )
}
