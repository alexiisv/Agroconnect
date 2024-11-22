import React from 'react'

function Home () {
  return (
    <div>
      <div className='bg-white rounded-xl shadow p-4 border-slate-600/20 mb-4'>
        <h2 className='text-3xl font-semibold mb-2 text-center'>AGROCONNECT</h2>
        <p className='mb-4'>Desarrollamos una plataforma inteligente que optimiza la gestión de cultivos, insumos y cosechas en el sector agrícola. Integra monitoreo IoT, IA y análisis predictivo para aumentar la productividad, reducir pérdidas y fomentar la sostenibilidad, conectando productores con mercados y logística eficiente.</p>
      </div>

      <div className='columns-1 gap-5 lg:gap-8 sm:columns-3 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>

        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/Agroconnect/main/src/assets/Intro/cultivo1.webp' alt='Cultivos 1' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/Agroconnect/main/src/assets/Intro/cultivo2.jfif' alt='Cultivos 2' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/Agroconnect/main/src/assets/Intro/cultivo3.jpg' alt='Cultivos 3' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/Agroconnect/main/src/assets/Intro/cultivo4.jpg' alt='Cultivos 4' />
        
      </div>

      <h1>AgroConnect</h1>
    </div>
  )
}

export default Home
