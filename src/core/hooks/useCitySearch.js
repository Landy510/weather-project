import { useState, useContext, useRef } from "react";

import { getCities } from "@/core/services/cities";
import { ReducerContext } from "@/features/GlobalContextBoundary";


/**
 * 取得使用者搜尋的相關城市列表
 *
 * @param {*} setCityList - 設定相關城市資訊
 * @param {*} setIsAccordionShow - 設定要是否要開關下拉選單
 * @param {*} setIsCityListLoading - 設定是否開啟 SearchBar 元件的 loading 效果
 * @return {*} 
 */
const useCitySearch = (setCityList, setIsAccordionShow, setIsCityListLoading) => {
  const [state, dispatch] = useContext(ReducerContext)

  const [value, setValue] = useState('');
  const timerId = useRef(null);
  const responseRef = useRef([]);

  const onSearchChange = async val => {
    if(!val) return;
    try {
      setIsCityListLoading(true);
      const response = await getCities(val);
      if(timerId.current) {
        clearTimeout(timerId.current);
        responseRef.current = []; // 將舊有的資料刪掉
        responseRef.current = response.data; // 將最新回傳的資料塞進去
      }
      else {
        responseRef.current = response.data; // 第一次打 api 直接將回傳的資料塞進去即可
      }

      timerId.current = setTimeout(() => {
        setCityList(
          responseRef.current.map(item => ({
            lat: item.latitude,
            lon: item.longitude,
            cityName: `${item.name}, ${item.regionCode}, ${item.countryCode}`
          }))
        )
        setIsAccordionShow(true);
      }, 100)

      setIsCityListLoading(false);
    }
    catch(err) {
      dispatch({
        reducerName: 'globalModalInfo',
        type: 'OPEN',
        message: err.message,
        modalType: 'Danger'
      })
      setIsCityListLoading(false);
    }
  }

  return {
    inputVal: value,
    setInputValue: setValue,
    onSearchChange
  }
}

export default useCitySearch;