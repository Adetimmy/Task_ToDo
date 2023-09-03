import Salutations from '@/components/salutations'
import {HiMenuAlt1} from 'react-icons/hi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <header className='min-w-full h-24  border-b border-gray-500 p-4 mb-8'>
        <div className='flex justify-between items-end h-full'>
          <h3 className='font-bold text-lg'>ToDo</h3>
          <button className='lg:hidden'><HiMenuAlt1 size={26}/></button>
        </div>
      </header>
      <section className='px-4'>
        <Salutations />
      </section>
   </main>
  )
}
