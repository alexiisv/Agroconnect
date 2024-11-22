import React from 'react'

function Home () {
  return (
    <div>
      <div className='bg-white rounded-xl shadow p-4 border-slate-600/20 mb-4'>
        <h2 className='text-xl font-semibold mb-2'>AGROCONNECT</h2>
        <p className='mb-4'>Desarrollamos una plataforma inteligente que optimiza la gestión de cultivos, insumos y cosechas en el sector agrícola. Integra monitoreo IoT, IA y análisis predictivo para aumentar la productividad, reducir pérdidas y fomentar la sostenibilidad, conectando productores con mercados y logística eficiente.</p>
      </div>

      <div className='columns-1 gap-5 lg:gap-8 sm:columns-3 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/intro/cultivo/1.jpeg' alt='Cultivos 1' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/intro/cultivo/2.jpeg' alt='Cultivos 2' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/intro/cultivo/3.jpeg' alt='Cultivos 3' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/intro/cultivo/4.jpeg' alt='Cultivos 4' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/intro/cultivo/5.jpeg' alt='Cultivos 5' />
        {/* <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/6.webp' alt='Cows 6' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/7.webp' alt='Cows 7' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/8.webp' alt='Cows 8' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/9.webp' alt='Cows 9' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/10.webp' alt='Cows 10' />
        <img className='rounded-lg' src='https://raw.githubusercontent.com/alexiisv/front-cow/main/src/assets/layout/11.webp' alt='Cows 11' /> */}
      </div>

      <h1>AgroConnect</h1>
    </div>
  )
}

export default Home
