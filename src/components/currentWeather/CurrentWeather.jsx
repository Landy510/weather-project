import sunnyImgUrl from '@/assets/images/icon/01d.png';
const CurrentWeather = () => {
  return (
    <div className="mx-auto mt-3 max-h-[20rem] max-w-[20rem] rounded-[0.5rem] bg-Black flex items-start">
      <div className='text-White grow h-full flex flex-col pl-3'>
        <p className='text-[2rem] font-thin mb-6'>Sunny</p>
        <div className='mt-auto'>
          <p className='font-thin'>Current Temperature</p>
          <p className='text-[4.5rem] font-Inter'>18°C</p>
        </div>
      </div>
      <img 
        src={sunnyImgUrl} 
        alt="" 
      />
    </div>
  )
}

export default CurrentWeather;