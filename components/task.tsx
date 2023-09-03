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
  return (
    <>
    <section className={`bg-[#F9FAFB] py-2 px-4 my-3 min-w-full  flex items-center h-auto  hover:bg-gray-300 text-[#101828] hover:text-gray-700`}>
        <div className="text-[14px] flex gap-5 items-center w-full">
            <input type="checkbox"  className="radio mr-2 accent-blue-600" checked={task.completed}/>
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