import { greet } from "@/hook/day"
import DateHeader from "./date"




const Salutations = () => {
  const { message, mnth, months, yea} = greet() as any


  return (
    <div className="">
        <div className="my-4">
            <h3 className="font-semibold text-2xl mb-2">Good {message}!</h3>
            <small className=" text-gray-600 dark:text-gray-400 font-work text-lg">You got some task to do.</small>
        </div>
       
        <DateHeader mnth={mnth} months={months} year={yea} /> 
    </div>
  )
}

export default Salutations