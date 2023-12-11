import { useState } from 'react';
import PropTypes from 'prop-types';

import useCitySearch from '@/core/hooks/useCitySearch';
import useWeatherFetchAndProcess from '@/core/hooks/useWeatherFetchAndProcess';

import SearchBar from '../searchBar/SearchBar';
import Accordion from '../accordion/Accordion';

const SearchArea = ({setCurrentWeatherInfo, setForecastInfo}) => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [isCityListLoading, setIsCityListLoading] = useState(false);
  const {inputVal, setInputValue, onInputChange} = useCitySearch(setCityList, setIsAccordionShow, setIsCityListLoading);
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
          setIsAccordionShow={setIsAccordionShow}
          cityList={cityList}
          onMenuClick={() => setIsAccordionShow(false)}
          onItemClick={city => {
            setInputValue(city.cityName)
            fetchWeatherInfo(city)
          }}
        />
      </div>
    </>
  )
}

export default SearchArea;

SearchArea.propTypes = {
  setCurrentWeatherInfo: PropTypes.func,
  setForecastInfo: PropTypes.func
}