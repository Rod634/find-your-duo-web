import './styles/main.css'
import logo from './assets/Logo.svg'
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

interface Games {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Games[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })

  }, [])


  return (

    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameCard
              key={game.id}
              title={game.title}
              ads={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          )
        })
        }
      </div>

        <CreateAdBanner />
    </div>
  )
}

export default App
