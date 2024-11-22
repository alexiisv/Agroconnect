import React from 'react'

function LoadingPage () {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <h1>Hola</h1> */}
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-800' />
    </div>
  )
}

export default LoadingPage
