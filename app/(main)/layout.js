import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container font-bold mx-auto my-32'>
      {children}
    </div>
  )
}

export default MainLayout
