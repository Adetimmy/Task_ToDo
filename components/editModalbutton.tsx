import { C } from "./CTAbtn"

export const Button = ({children, icon}:C) => {

    return (
      <button className={`flex flex-row-reverse items-center gap-1 py-4 px-1 w-[31.5%] font-semibold text-xm justify-center border-[2px] text-gray-700 border-gray-400 rounded-lg`}
         >
          {icon}
          {children}
      </button>
    )


}

