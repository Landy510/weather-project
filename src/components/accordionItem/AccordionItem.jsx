import { useContext } from 'react';
import PropTypes from 'prop-types';
import { globalLoadingContext } from '@/core/context/GlobalLoadingContext';
import { getCurrentWeather, getForecastWeather } from '@/core/services/weather';
import { weatherContext } from '@/core/context/WeatherContext';

const AccordionItem = ({lat, lon, cityName, isEmpty}) => {
  const {setIsLoading} = useContext(globalLoadingContext);
  const {setCurrentWeatherInfo, setForecastInfo} = useContext(weatherContext);

  const fetchWeatherInfo = async () => {
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

  const onClickEvt = () => {
    setIsLoading(true);
    fetchWeatherInfo()
  }

  return (
    <li 
      className="p-3 cursor-pointer hover:bg-slate-50"
      onClick={isEmpty ? null : () => onClickEvt()}
    >
      {
        isEmpty ? 
        <p>No Related Result</p>
        :
        cityName
      }
    </li>
  )
}

export default AccordionItem;

AccordionItem.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
  cityName: PropTypes.string,
  isEmpty: PropTypes.bool
}