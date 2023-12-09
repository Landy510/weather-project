import PropTypes from 'prop-types';

const DailyWeather = ({date, val}) => {
  return (
    <>
      <p>{date}</p>
      <div className="py-3 px-2 mb-5 bg-White shadow-[0_0_5px_rgba(0,0,0,0.3)] rounded-[2rem] flex items-center justify-between duration-500 hover:translate-x-3">
        {
          val.map(individualInfo => {
            return (
                <div key={individualInfo.dt}>
                  <time>{new Date(individualInfo.dt*1000).getHours()}</time>
                  <p className='text-[0.75rem]'>{individualInfo.weather[0].description}</p>
                  <p className='text-[0.75rem]'>
                    {Math.ceil(individualInfo.main.temp_max)}°C / {Math.floor(individualInfo.main.temp_min)}°C
                  </p>
                  <img 
                    src={`https://openweathermap.org/img/wn/${individualInfo.weather[0].icon}@2x.png`} 
                    alt="" 
                  /> 
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default DailyWeather;

DailyWeather.propTypes = {
  date: PropTypes.string,
  val: PropTypes.array
}