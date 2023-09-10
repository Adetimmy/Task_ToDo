import { useStateContext } from "@/context/useContext"
// import { handleDelete } from "./multipleHandleEvent"

export interface C{
    children:React.ReactNode,
    icon?:React.ReactNode,
    id?:number
}


type ButtonProps = {
  icon?:React.ReactNode,
  title: string,
  type:"button" | "submit",
  size?:number | string,
  handle?: () => void
  handleClick? : (arg:any) => void
}



 

export const Icon = ({icon,title, handle, type, size, handleClick}:ButtonProps) => {

  const {field, task, setTask, setField, setTaskValue, taskValue, edited} = useStateContext()

  const transparentBtn = "text-gray-600 border-2 border-gray-300 hover:bg-blue-600 hover:border-transparent hover:text-gray-200"
  const blueBtn = "bg-blue-600 border-transparent hover:bg-transparent hover:border-2 hover:text-gray-600 hover:border-gray-300 text-gray-50"

 
  return (
    <button className={`flex gap-2 p-2 ${size === "full"? 'w-full': 'w-[45%]'} ${title === "Cancel" ? transparentBtn : title === "Delete" ? transparentBtn : blueBtn} font-semibold justify-center mb-5 items-center border-gray-200 rounded-md `}
      type={type}
      onClick={ (e) => {
        if (handle) {
          handle();
        } else if (handleClick) {
          handleClick(e);
        }
      }}
     >
      {icon}
      {title}
    </button>
  )
}
   