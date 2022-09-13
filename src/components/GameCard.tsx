
interface gameCardProps {
    title: string,
    ads: string
}

export default function GameCard({title, ads} : gameCardProps){
    return (
        <a className='relative rounded-lg overflow-hidden'>
          <img src="game-img.png"/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white'>{title}</strong>
            <span className='text-zinc-300 text-sm block'>{ads}</span>
          </div>
        </a>
    )
}