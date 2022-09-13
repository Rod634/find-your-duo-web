import './styles/main.css'
import logo from './assets/Logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react';
import GameCard from './components/GameCard';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <GameCard
          title='League of legends'
          ads='4 anúncios'
        />
        <GameCard
          title='League of legends'
          ads='4 anúncios'
        />
        <GameCard
          title='League of legends'
          ads='4 anúncios'
        />
        <GameCard
          title='League of legends'
          ads='4 anúncios'
        />
        <GameCard
          title='League of legends'
          ads='4 anúncios'
        />
        <GameCard
          title='League of legends'
          ads='4 anúncios'
        />
        
      </div>

      <div className='bg-gradient pt-1 self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] w-full py-6 px-8 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white' >Não encontrou seu duo?</strong>
            <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 text-white bg-violet-500 hover:bg-violet-600 rounded flex gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
