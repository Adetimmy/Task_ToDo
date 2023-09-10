'use client'
import { Dna } from "react-loader-spinner"

const Loading = () => {
    const style:any= {
        background: "rgba(25,25,25, 1)",
        width:"100%",
        height:"100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        position:"absolute",
        top:"0",
        zIndex:"99"
    }
  return (
    <div style={style}>
      <Dna />

    </div>
  )
}

export default Loading