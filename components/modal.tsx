import { useStateContext } from '@/context/useContext';
import { DeleteTaskModal } from './deleteTaskModal';
import EditTaskModal from './EditTaskModal';




export const ModalPopUp = () => {
    const {field} = useStateContext()

 
  return (
    <>
     <div className='sm:w-[400px] bg-white xl:hidden h-[450px] w-full rounded-t-xl absolute p-5 modal overflow-y-scroll '>
      
            
      {  field.edit? 
         <EditTaskModal />
         :
         <DeleteTaskModal/>
      }
    </div>

    <div className=''>
      
            
      {  field.edit? 
         <EditTaskModal />
         :
         <DeleteTaskModal/>
      }
</div>
    </>
   
  )
}
