import { useState } from 'react';

import useCitySearch from '@/core/hooks/useCitySearch';

import SearchBar from '../searchBar/SearchBar';
import Accordion from '../accordion/Accordion';

const SearchArea = () => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isCityListLoading, setIsCityListLoading] = useState(false);
  const {inputVal, onInputChange} = useCitySearch(setCityList, setIsAccordionShow, setIsCityListLoading);
  
  return (
    <>
      <div className='relative'>
        <SearchBar 
          inputVal={inputVal}
          onInputChange={onInputChange}
          selectedCity={selectedCity}
          isCityListLoading={isCityListLoading}
        />
        <Accordion 
          isAccordionShow={isAccordionShow} 
          setIsAccordionShow={setIsAccordionShow}
          setSelectedCity={setSelectedCity}
          cityList={cityList}
        />
      </div>
      <p className='mt-3 text-[2rem] text-center font-bold font-Inter'>
        {selectedCity}
      </p>
    </>
  )
}

export default SearchArea;