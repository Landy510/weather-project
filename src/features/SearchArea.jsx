import { useState } from 'react';
import PropTypes from 'prop-types';

import useCitySearch from '@/core/hooks/useCitySearch';
import useWeatherFetchAndProcess from '@/core/hooks/useWeatherFetchAndProcess';

import SearchBar from '@/features/SearchBar';
import Accordion from '@/features/Accordion';

const SearchArea = ({setCurrentWeatherInfo, setForecastInfo}) => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [isCityListLoading, setIsCityListLoading] = useState(false);
  const {inputVal, setInputValue, onInputChange} = useCitySearch(setCityList, setIsAccordionShow, setIsCityListLoading);
  const {fetchWeatherInfo} = useWeatherFetchAndProcess(setCurrentWeatherInfo, setForecastInfo)
  
  return (
    <>
      {/* --- 當下拉選單出現，這個毛玻璃的效果會墊在選單底下，若使用者點擊這個區域，可以直接關閉選單 | START --- */}
      <div 
        className={[
          'fixed top-[0] left-[0] w-full h-full backdrop-blur-sm z-[2]',
          isAccordionShow ? '' : 'hidden'
        ].join(' ')}
        onClick={() => setIsAccordionShow(false)}
      ></div>
      {/* --- END --- */}

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
          onAccordionClose={() => setIsAccordionShow(false)}
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