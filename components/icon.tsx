interface C{
    children:React.ReactNode,
    icon?:React.ReactNode
}

export const Icon = ({children,icon}:C) => {
  return (
    <button className="flex gap-2 p-2 bg-transparent border-gray-200 rounded-md">
        {icon}
        {children}
    </button>
  )
}
   