import PropTypes from 'prop-types';
import dayTransfer from '@/core/utils/dayTransfer';
import temperatureTransfer from '@/core/utils/temperatureTransfer';

const DailyWeather = ({day, val}) => {
  return (
    <>
      <p>{dayTransfer(day)}</p>
      <div className="py-3 pl-3 pr-2 mb-5 bg-White shadow-[0_0_5px_rgba(0,0,0,0.3)] rounded-[2rem] flex items-center justify-between duration-500 hover:translate-x-3">
        {
          val.map(individualInfo => {
            return (
                <div key={individualInfo.dt}>
                  <time>{new Date(individualInfo.dt*1000).getHours()}</time>
                  <p className='text-[0.75rem]'>{individualInfo.weather[0].description}</p>
                  <p className='text-[0.75rem]'>
                    {temperatureTransfer(individualInfo.main.temp_max, 'metric', 'max')} / {temperatureTransfer(individualInfo.main.temp_min, 'metric', 'min')}
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
  day: PropTypes.string,
  val: PropTypes.array
}