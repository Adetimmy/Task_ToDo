import { FaTimes } from 'react-icons/fa'
import Button from '@mui/material/Button';
import { useStateContext } from '@/context/useContext';
import { task } from './task';

const Frame = () => {
    const {setField} = useStateContext()

    
    const handleClose = () => {
        setField((prev:task) => {
            return {
              ...prev,
              show:!prev.show
            }
          })
    }
  return (
    <div className='bg-white h-full w-full rounded-t-lg absolute p-5 '>
        <div>
            <div className='flex justify-between items-center'>
                <p className='text-gray-700 text-lg'>Edit tasks</p>
                <button className='text-black' type='button' onClick={handleClose}>< FaTimes size={20}/></button>
            </div>
            <input type="text" />
            <div>
                <Button variant="outlined">Cancel</Button>
                <Button variant="contained">Save</Button>
            </div>
        </div>
    </div>
  )
}

export default Frame