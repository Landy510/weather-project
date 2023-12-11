import PropTypes from 'prop-types';
import dayTransfer from '@/core/utils/dayTransfer';
import temperatureTransfer from '@/core/utils/temperatureTransfer';
import formatTime from '@/core/utils/formatTime';

const DailyWeather = ({day, val}) => {
  return (
    <>
      <p className='font-light text-[1.25rem] mb-1'>{dayTransfer(day)}</p>
      <div className="py-3 px-2 mb-5 bg-White shadow-[0_0_5px_rgba(0,0,0,0.3)] rounded-[0.5rem] flex items-center justify-between duration-500 hover:shadow-[0_0_8px_rgba(0,0,0.2)] overflow-x-auto">
        {
          val.map(individualInfo => {
            return (
                <div 
                  key={individualInfo.dt}
                  className='shrink-0 text-center'
                >
                  <time>{formatTime(new Date(individualInfo.dt*1000).getHours())}</time>
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