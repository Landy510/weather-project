import PropTypes from 'prop-types';

const CurrentWeather = ({data}) => {
  return (
    <div className="mx-auto mt-3 pb-3 max-h-[20rem] max-w-[30rem] rounded-[0.5rem] bg-Black flex items-start">
      <div className='text-White grow h-full flex flex-col pl-3'>
        <p className='text-[2rem] font-thin mb-6'>{data.weather[0].description}</p>
        <div className='mt-auto'>
          <p className='font-thin'>Current Temperature</p>
          <p className='text-[4.5rem] font-Inter'>{Math.round(data.main.temp)}°C</p>
        </div>
        <p>H: {Math.ceil(data.main.temp_max)}°C / L: {Math.floor(data.main.temp_min)}°C</p>
      </div>
      <img 
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
        alt="" 
      />
    </div>
  )
}

export default CurrentWeather;

CurrentWeather.propTypes = {
  data: PropTypes.object
}