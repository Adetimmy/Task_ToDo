"use client"
import DateHeader from "./date"
import { useStateContext } from "@/context/useContext"




const Salutations = () => {

  const { message, mnth, months, yea} = useStateContext()


  return (
    <div className="">
        <div className="my-4">
            <h3 className="font-semibold text-2xl mb-2">Good {message}!</h3>
            <small className=" text-gray-600 dark:text-gray-400 font-work md:text-lg text-base">You got some task to do.</small>
        </div>
       
        <DateHeader mnth={mnth} months={months} year={yea} /> 
    </div>
  )
}

export default Salutations