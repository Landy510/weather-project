import { useContext } from 'react';
import PropTypes from 'prop-types';
import { getCurrentWeather, getForecastWeather } from '@/core/services/weather';
import { globalLoadingContext } from '@/core/context/GlobalLoadingContext';
import { weatherContext } from '@/core/context/WeatherContext';


const Accordion = ({
  isAccordionShow, 
  setIsAccordionShow,
  cityList
}) => {
  const {setIsLoading} = useContext(globalLoadingContext);
  const {setCurrentWeatherInfo, setForecastInfo} = useContext(weatherContext);

  const fetchWeatherInfo = async (lat, lon) => {
    setIsLoading(true);
    try {
      const [currInfo, foreCastInfo] = await Promise.all([getCurrentWeather(lat, lon), getForecastWeather(lat, lon)]);
      let tempObj = {};
      foreCastInfo.list.forEach(info => {
        const date = new Date(info.dt*1000).getDate();
        if(date !== new Date().getDate()) { // 因為只有要呈現未來五日的資訊，所以，當日的資料不塞入
          if(!tempObj[date]) tempObj[date] = []
          tempObj[date].push(info)
        }
      })
      setCurrentWeatherInfo(currInfo);
      setForecastInfo(tempObj);
      setIsLoading(false);
    }
    catch(err) {
      setIsLoading(false);
    }
  }


  return (
    <ul 
      className={[
        'absolute left-[0] right-[0] z-[1] mx-3 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-[0.5rem] max-h-[14rem] overflow-y-auto bg-[#fff] duration-500',
        isAccordionShow ? 'translate-y-3' : '-translate-y-[250%]'
      ].join(' ')}
      onClick={() => setIsAccordionShow(false)}
    >
      {
        cityList.length === 0 ?
          <li className="p-3 cursor-pointer hover:bg-slate-50">
            <p>No Related Result</p>
          </li>
          :
          cityList.map((city, index) => {
            return (
              <li 
                key={index}
                className="p-3 cursor-pointer hover:bg-slate-50"
                onClick={() => fetchWeatherInfo(city.lat, city.lon)}
              >
                  {city.cityName}
              </li>
            )
          })
      }
    </ul>
  )
}

export default Accordion;

Accordion.propTypes = {
  isAccordionShow: PropTypes.bool,
  setIsAccordionShow: PropTypes.func,
  cityList: PropTypes.array
}