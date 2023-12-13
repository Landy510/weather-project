import { useState, useRef, useContext } from "react";

import { getCities } from "@/core/services/cities";
import { GlobalErrorModalContext } from "@/features/GlobalContextBoundary";


/**
 * 取得使用者搜尋的相關城市列表
 *
 * @param {*} setCityList - 設定相關城市資訊
 * @param {*} setIsAccordionShow - 設定要是否要開關下拉選單
 * @param {*} setIsCityListLoading - 設定是否開啟 SearchBar 元件的 loading 效果
 * @return {*} 
 */
const useCitySearch = (setCityList, setIsAccordionShow, setIsCityListLoading) => {
  const {setGlobalErrorModalInfo} = useContext(GlobalErrorModalContext);
  const [value, setValue] = useState('');
  const timerId = useRef(null);

  const onChange = e => {
    const inputVal = e.target.value.trim();
    setValue(inputVal);
    if(timerId.current) clearTimeout(timerId.current);
    if(!inputVal) return; // 沒有輸入內容就不去打 api
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
        setGlobalErrorModalInfo({
          show: true,
          message: err.message
        })
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