import { useStateContext } from '@/context/useContext'
import { Pagination, PaginationItem } from '@mui/material'
import { ChangeEvent } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Paginating = () => {

  const { setPage} = useStateContext()

  return (
    <div className='fixed bottom-0 w-[58.85%] border-t-2 border-[rgba(107, 114, 128, .1)]'>
    <Pagination count={10} color='primary' variant='text' size="large" className='hidden xl:inline'
        onChange={(event: ChangeEvent<any>, page:number) => {
        const num:any = event.target?.value || page
        setPage((num * 10) - 1)
        }}
        renderItem={(item:any) => (
        <PaginationItem
   
        slots={{
        previous: Previous,
        next: Next
         }}
        {...item}
    />
        )}
    />
    </div>
  )
}



function Previous() {
    return(
      <button className='text-gray-700 font-semibold flex justify-center gap-2 p-1.5 rounded items-center'>
        <FaArrowLeft/>
        Previous
      </button>
    )
  } 
  
  function Next() {
    return(
      <button className='text-gray-700 font-semibold flex justify-center gap-2 flex-row-reverse p-1.5  rounded items-center'>
        <FaArrowRight/>
        Next
      </button>
    )
  } 