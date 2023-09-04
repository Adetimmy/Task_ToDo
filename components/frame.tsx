

import { useStateContext } from '@/context/useContext';
import { task } from './task';
import { DeleteTaskModal } from './deleteTaskModal';
import EditTaskModal from './EditTaskModal';




const Frame = () => {
    const {setField, taskValue, setTaskValue, field} = useStateContext()

 
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

export default Frame