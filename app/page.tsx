import Home from '@/components/route'
import ContentProvider from '@/context/useContext'
import React from 'react'

const Page = () => {
  return (
   <ContentProvider>
      <Home/>
   </ContentProvider>
  )
}

export default Page