import { useStateContext } from "@/context/useContext";
import { addTask } from "@/methods/addTask";
import { Tooltip } from "@mui/material";
import { BiSend } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';
import { Add } from "./multipleHandleEvent";

interface Edit {
  editField: string
}

export const AddInput = () => {
  const { taskValue, setTaskValue, setTask, setLoading, setError } = useStateContext();
  const validationSchema: ZodType<Edit> = z.object({
    editField: z.string().min(5, { message: 'This field is required' }),
  });

  const { register, handleSubmit,getValues,formState: { errors }, reset } = useForm<Edit>({
    resolver: zodResolver(validationSchema), // Use zodResolver for validation
    defaultValues: { editField: taskValue }, // Set default values including the editField
  });

  const onhandleSubmit = async (data: Edit) => {
    setTaskValue(data.editField); // Update taskValue with the form data
    await Add({setTask, taskValue, setTaskValue, setLoading, setError })
    setTimeout(() => reset(), 500) // Clear the input field in 0.5s
    
  }

  return (
    <form onSubmit={handleSubmit(onhandleSubmit)} className="dark:bg-gray-200 xl:hidden shadow-lg bg-gray-200 rounded-lg relative w-full flex items-center p-2 h-[60px]">
       {errors.editField && <p className="text-red-500 text-xs mt-1">{errors.editField?.message}</p>}
      <input
        type='text'
        className={`xl:w-11/12 w-10/12 text-[#101828] dark:text-gray-600 focus:outline-[0.3px] focus:outline-blue-600 h-[45px] focus:border-0 p-3 bg-transparent ${
          errors.editField ? 'border-red-500' : ''
        }`}
        placeholder='Input Task'
        title={taskValue}
        {...register('editField')}
         required
        autoFocus={true}
      
      />
     
      <div className='w-1/6 flex justify-center'>
        <Tooltip title="Record" placement="top">
          <IconButton type='submit'>
            <button className="absolute -right-42 text-blue-600 hover:opacity-80">
              {getValues().editField?.length < 1 ? <FaMicrophone size={25} /> : <BiSend size={25} />}
            </button>
          </IconButton>
        </Tooltip>
      </div>
    </form>
  )
}
