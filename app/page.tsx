import Salutations from '@/components/salutations'
import Tasks from '@/components/tasks'
import {HiMenuAlt1} from 'react-icons/hi'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full lg:w-4/6 overflow-hidden flex-col ">
      <header className='min-w-full h-24  border-b border-gray-500 p-4 '>
        <div className='flex justify-between items-end h-full'>
          <h3 className='font-bold text-lg'>ToDo</h3>
          <button className='lg:hidden'><HiMenuAlt1 size={26}/></button>
        </div>
      </header>

      {/*this salutation handles the greeting and the floating date  */}
      <section>
        <Salutations />
      </section>
      
      <section className='font-work mt-5'>
        <h3 className='font-semibold my-3'>My Tasks</h3>
        <Tasks/>
      </section>
   </main>
  )
}
