import { useState, useRef } from "react";

import { getCities } from "@/core/services/cities";

const useCitySearch = (setCityList, setIsAccordionShow, setIsCityListLoading) => {
  const [value, setValue] = useState('');
  const timerId = useRef(null);

  const onChange = e => {
    const inputVal = e.target.value.trim();
    setValue(inputVal);
    if(!inputVal) return; // 沒有輸入內容就不去打 api
    if(timerId.current) clearTimeout(timerId.current);
    // --- debounce feature | START ---
    timerId.current = setTimeout(async () => {
      try {
        setIsCityListLoading(true);
        const response = await getCities(inputVal);
        setCityList(
          response.data.map(item => ({
            lat: item.latitude,
            lon: item.longitude,
            cityName: `${item.name}, ${item.regionCode}, ${item.countryCode}`
          }))
        )
        setIsAccordionShow(true);
        setIsCityListLoading(false);
      }
      catch(err) {
        console.error(err);
        setIsCityListLoading(false);
      }
    }, 500)
    // --- END ---
  }

  return {
    inputVal: value,
    setInputValue: setValue,
    onInputChange: onChange
  }
}

export default useCitySearch;