import { useStateContext } from "@/context/useContext"
import { task } from "./task"




// to close the select task pop-up modal 
export const handleClose = ({setField, setTaskValue }:any) => {
// const {setField, setTaskValue } = useStateContext()

setField((prev:task) => {
return {
  ...prev,
  show:false
}
})
setTaskValue("")
}