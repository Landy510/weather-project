import sunnyImgUrl from '@/assets/images/icon/01d.png';

const DailyWeather = () => {
  return (
    <div className="h-[3.5rem] pr-4 py-1 mb-5 bg-Grey shadow-[0_0_5px_rgba(0,0,0,0.3)] rounded-[2rem] flex items-center duration-500 hover:translate-x-3">
      <img 
        src={sunnyImgUrl} 
        alt="" 
        className='h-full mr-2'
      />
      <div className='grow'>
        <p>Sunny</p>
        <div className='text-end'>
          <span>Highest/lowest: </span>
          <span className='font-Inter'>25°C / 18°C</span>
        </div>
      </div>
    </div>
  )
}

export default DailyWeather;