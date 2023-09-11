import { useStateContext } from "@/context/useContext";
import { toast } from 'react-toastify';
import { Tooltip } from "@mui/material";
import { BiSend } from "react-icons/bi";
import { FaMicrophone, FaSpinner } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';
import { Add } from "./multipleHandleEvent";

interface Edit {
  editField: string
}

export const AddInput = () => {
  const { taskValue, setTaskValue, setTask, setLoading, loading } = useStateContext();
  const validationSchema: ZodType<Edit> = z.object({
    editField: z.string().min(5, { message: 'must be more than 5 letters' }),
  });

  const { register, handleSubmit,getValues,formState: { errors }, reset } = useForm<Edit>({
    resolver: zodResolver(validationSchema), // Use zodResolver for validation
    defaultValues: { editField: taskValue }, // Set default values including the editField
  });

  const onhandleSubmit = async (data: Edit) => {
    setTaskValue(data.editField); // Update taskValue with the form data
    await Add({setTask, taskValue, setTaskValue, setLoading})
    setTimeout(() => reset(), 500) // Clear the input field in 0.5s
    
  }

  return (
    <form onSubmit={handleSubmit(onhandleSubmit)} className="dark:bg-gray-200 xl:hidden shadow-lg bg-gray-200 rounded-lg relative w-full flex items-center p-2 h-[60px]">
       {errors.editField && (toast.info(`${errors.editField.message}`, { position: toast.POSITION.TOP_LEFT, }))}
       
     
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
        {loading? <div className="w-24 h-24 text-blue-600 flex justify-center items-center rounded-full"><FaSpinner className="animate-spin" size={24}/></div>:
        <Tooltip title="Record" placement="top">
          <IconButton type='submit'>
            <button className="absolute -right-42 text-blue-600 hover:opacity-80">
              {getValues().editField?.length < 1 ? <FaMicrophone size={25} /> : <BiSend size={25} />}
            </button>
          </IconButton>
        </Tooltip>}
      </div>
    </form>
  )
}
