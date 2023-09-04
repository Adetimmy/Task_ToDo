import { C } from "./icon"

export const Button = ({children, icon}:C) => {

    return (
      <button className={`flex flex-row-reverse items-center gap-2 p-4  w-[31.5%] font-semibold justify-center border-[2px] text-gray-700 border-gray-400 rounded-lg`}
         >
          {icon}
          {children}
      </button>
    )


}

