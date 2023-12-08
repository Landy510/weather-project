import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Accordion from '../accordion/Accordion';

const SearchArea = () => {
  const [isAccordionShow, setIsAccordionShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  
  return (
    <div className='relative'>
      <SearchBar 
        setIsAccordionShow={setIsAccordionShow} 
        setCityList={setCityList}
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