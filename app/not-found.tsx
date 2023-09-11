import Link from "next/link"

const Not_Found = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-red-400 font-black text-3xl dark:text-white animate-bounce">404!</h1>
        <p className="text-xl font-bold mb-3">Page Not Found</p>
        <button className="w-16 h-10 p-2 bg-lime-300 hover:bg-lime-200 rounded-md">
            <Link href={"/"}>Home</Link>
        </button>
    </div>
  )
}

export default Not_Found