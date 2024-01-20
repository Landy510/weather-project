import { useState } from 'react';
import PropTypes from 'prop-types';
import dayTransfer from '@/core/utils/dayTransfer';
import temperatureTransfer from '@/core/utils/temperatureTransfer';
import formatTime from '@/core/utils/formatTime';
import { isNumber } from '@/core/utils/isNumber';

const addShiftEffect = (hoverIndex, elIndex) => {
  return isNumber(hoverIndex) && elIndex > hoverIndex;
}

const addHoverEffect = (hoverIndex, elIndex) => {
  return isNumber(elIndex) && hoverIndex === elIndex;
}


/**
 * 呈現指定城市的未來天氣資訊
 *
 * @param {*} day - 該天是星期幾 (e.g. 0 ~ 6)
 * @param {*} val - 該天天氣資訊
 * @return {*} 
 */
const DailyWeather = ({day, val}) => {
  const [hoveringIndex, setHoveringIndex] = useState(null);
  return (
    <>
      <p className='font-light text-[1.25rem] mb-1'>{dayTransfer(day)}</p>
      <ul className="px-2 py-3 mb-5 flex items-center overflow-x-auto">
        {
          val.map((individualInfo, index) => {
            return (
                <li 
                  key={individualInfo.dt}
                  className='rounded-[0.5rem] -mr-[10rem] shrink-0 text-center bg-White max-w-[17rem] min-h-[15rem] w-full shadow-[-20px_0_20px_rgba(0,0,0,0.3)] relative duration-200'
                  style={{
                    zIndex: index,
                    ...(addShiftEffect(hoveringIndex, index) && {
                      transform: `translateX(10rem)`
                    }),
                    ...(addHoverEffect(hoveringIndex, index) && {
                      transform: `rotate(5deg)`
                    })
                  }}
                  onMouseEnter={() => setHoveringIndex(index)}
                  onMouseLeave={() => setHoveringIndex(null)}
                >
                  <time className='text-[1.5rem] font-black'>{formatTime(new Date(individualInfo.dt*1000).getHours())}</time>
                  <p className='text-[1.5rem]'>{individualInfo.weather[0].description}</p>
                  <p className='text-[1.5rem]'>
                    {temperatureTransfer(individualInfo.main.temp_max, 'metric', 'max')} / {temperatureTransfer(individualInfo.main.temp_min, 'metric', 'min')}
                  </p>
                  <img 
                    className='block mx-auto w-[10rem]'
                    src={`https://openweathermap.org/img/wn/${individualInfo.weather[0].icon}@2x.png`} 
                    alt="" 
                  /> 
                </li>
            )
          })
        }
      </ul>
      
    </>
  )
}

export default DailyWeather;

DailyWeather.propTypes = {
  // day: PropTypes.string,
  day: PropTypes.number,
  val: PropTypes.array
}