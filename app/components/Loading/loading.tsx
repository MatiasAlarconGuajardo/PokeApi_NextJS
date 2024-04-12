import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-opacity-20'>
      <div className='flex flex-col items-center justify-center'>
        <Image priority className='animate-shakeAndGrow w-3/5 h-3/5' width={50} height={50} alt='Pokeball Loading' src='/assets/pokeball.png'/>
        <p className='pt-0 text-2xl text-colornombres font-bold'>Cargando...</p>
      </div>
    </div>
  )
}

export default Loading
