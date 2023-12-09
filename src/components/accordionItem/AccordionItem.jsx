import { useContext } from 'react';
import PropTypes from 'prop-types';
import { globalLoadingContext } from '@/core/context/GlobalLoadingContext';
import { getCurrentWeather } from '@/core/services/weather';

const AccordionItem = ({lat, lon, cityName, isEmpty}) => {
  const {setIsLoading} = useContext(globalLoadingContext);

  const fetchWeatherInfo = async () => {
    getCurrentWeather(lat, lon)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    
  }

  return (
    <li 
      className="p-3 cursor-pointer hover:bg-slate-50"
      onClick={async () => {
        setIsLoading(true);
        fetchWeatherInfo();
      }}
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