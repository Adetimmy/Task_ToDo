import { useStateContext } from "@/context/useContext"

interface DataProps{
    completed:boolean,
    id:number
    title:string
    userId:number
} 

type C = {
    task:DataProps
} 

const Task = ({task}:C) => {

const handleChange = () => {
}

  return (
    <>
    <section className={`bg-[#F9FAFB] getlen py-2 px-4 my-5  min-w-full  flex items-center h-auto  dark:hover:bg-gray-300 text-[#101828] dark:hover:text-gray-700 shadow-sm hover:shadow-md $`}>
        <div className="text-[14px] flex gap-5 items-center w-full">
            <input type="checkbox"  className="radio mr-2 accent-blue-600" checked={task.completed} onChange={() => handleChange}/>
            <div className="w-5/6">
                <article className={` break-words font-semibold ${task.completed? "line-through opacity-40" : ""} `}>{task.title}
                </article>
                <small className={`text-[#475467] ${task.completed? "line-through opacity-40" : ""}`}>12:30 pm - 2:10 pm</small>
            </div>
        </div>
      <div className="">
            <small className="text-[#475467]">Today</small>
      </div>
    </section>
  </>
  )
}

export default Task