import DateHeader from "./date"
import { useStateContext } from "@/context/useContext"




const Salutations = () => {

  const {mnth, months, yea} = useStateContext()


  return (
        <DateHeader mnth={mnth} months={months} year={yea} /> 
  )
}

export default Salutations