import { useState } from 'react';
import PropTypes from 'prop-types';

import useCitySearch from '@/core/hooks/useCitySearch';
import useWeatherFetchAndProcess from '@/core/hooks/useWeatherFetchAndProcess';

import SearchBar from '@/features/SearchBar';
import Accordion from '@/features/Accordion';
import SearchRecords from './SearchRecords';


/**
 * 用來管理 SearchBar 和 Accordion 需要使用的共用狀態
 *
 * @param {*} setCurrentWeatherInfo - 設定指定城市的當前天氣資訊
 * @param {*} setForecastInfo - 設定指定城市未來五天的天氣資訊
 * @return {*} 
 */
const SearchArea = ({setCurrentWeatherInfo, setForecastInfo}) => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [isCityListLoading, setIsCityListLoading] = useState(false);
  // const {inputVal, setInputValue, onInputChange} = useCitySearch(setCityList, setIsAccordionShow, setIsCityListLoading);
  const {inputVal, setInputValue, onSearchChange} = useCitySearch(setCityList, setIsAccordionShow, setIsCityListLoading);
  const {fetchWeatherInfo} = useWeatherFetchAndProcess(setCurrentWeatherInfo, setForecastInfo)

  const [recentRecords, setRecentRecords] = useState(localStorage.getItem('cityList') ? JSON.parse(localStorage.getItem('cityList')) : [])
  
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
        <SearchRecords 
          recentRecords={recentRecords}
          onItemClick={(city) => {
            fetchWeatherInfo(city)
            setInputValue(city.cityName)
          }}
        />

        <SearchBar 
          inputVal={inputVal}
          setInputValue={setInputValue}
          onSearchChange={onSearchChange}
          isCityListLoading={isCityListLoading}
        />

        <Accordion 
          isAccordionShow={isAccordionShow} 
          onMenuClick={() => setIsAccordionShow(false)}
          onItemClick={city => {
            setInputValue(city.cityName)
            fetchWeatherInfo(city)
            if(recentRecords.every(item => item.cityName !== city.cityName)) {
              const tempRecords = recentRecords.slice(0, 5);
              if(tempRecords.length === 5) tempRecords.pop(); // if the amount of records is equal to 5 then remove the last element from the records
              tempRecords.unshift(city); // add the new record to the first position of the records
              setRecentRecords(tempRecords);
              localStorage.setItem('cityList', JSON.stringify(tempRecords))
            }
          }}
          cityList={cityList}
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