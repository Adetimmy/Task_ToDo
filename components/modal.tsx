import { useStateContext } from '@/context/useContext';
import { DeleteTaskModal } from './deleteTaskModal';
import EditTaskModal from './EditTaskModal';




export const ModalPopUp = () => {
    const {field} = useStateContext()

 
  return (
    <div className='bg-white h-full w-full rounded-t-xl absolute p-5 '>
      
            
             {  field.edit? 
                <EditTaskModal />
                :
                <DeleteTaskModal/>
             }
    </div>
  )
}
