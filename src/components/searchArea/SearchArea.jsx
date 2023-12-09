import { useState } from 'react';

import useCitySearch from '@/core/hooks/useCitySearch';

import SearchBar from '../searchBar/SearchBar';
import Accordion from '../accordion/Accordion';

const SearchArea = () => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const {inputVal, onInputChange} = useCitySearch(setCityList, setIsAccordionShow);
  
  return (
    <div className='relative'>
      <SearchBar 
        inputVal={inputVal}
        onInputChange={onInputChange}
      />
      <Accordion 
        isAccordionShow={isAccordionShow} 
        setIsAccordionShow={setIsAccordionShow}
        cityList={cityList}
      />
    </div>
  )
}

export default SearchArea;