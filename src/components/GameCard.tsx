
interface gameCardProps {
    title: string,
    ads: number,
    bannerUrl: string
}

export function GameCard({title, ads, bannerUrl} : gameCardProps){
    return (
        <a className='relative rounded-lg overflow-hidden'>
          <img src={bannerUrl}/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white'>{title}</strong>
            <span className='text-zinc-300 text-sm block'>{ads}{ads > 1 ? ' anúncios' : ' anúncio'} </span>
          </div>
        </a>
    )
}