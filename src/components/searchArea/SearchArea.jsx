import { useState } from 'react';
import PropTypes from 'prop-types';

import useCitySearch from '@/core/hooks/useCitySearch';
import useWeatherFetchAndProcess from '@/core/hooks/useWeatherFetchAndProcess';

import SearchBar from '../searchBar/SearchBar';
import Accordion from '../accordion/Accordion';

const SearchArea = ({setCurrentWeatherInfo, setForecastInfo}) => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isCityListLoading, setIsCityListLoading] = useState(false);
  const {inputVal, onInputChange} = useCitySearch(setCityList, setIsAccordionShow, setIsCityListLoading);
  const {fetchWeatherInfo} = useWeatherFetchAndProcess(setCurrentWeatherInfo, setForecastInfo)
  
  return (
    <>
      <div className='relative'>
        <SearchBar 
          inputVal={inputVal}
          onInputChange={onInputChange}
          isCityListLoading={isCityListLoading}
        />
        <Accordion 
          isAccordionShow={isAccordionShow} 
          setSelectedCity={setSelectedCity}
          cityList={cityList}
          onMenuClick={() => setIsAccordionShow(false)}
          onItemClick={city => {
            setSelectedCity(city.cityName)
            fetchWeatherInfo(city)
          }}
        />
      </div>
      <p className='mt-3 text-[2rem] text-center font-bold font-Inter'>
        {selectedCity}
      </p>
    </>
  )
}

export default SearchArea;

SearchArea.propTypes = {
  setCurrentWeatherInfo: PropTypes.func,
  setForecastInfo: PropTypes.func
}