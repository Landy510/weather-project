import { useContext } from "react";
import { ReducerContext } from "@/features/GlobalContextBoundary";
import { getCurrentWeather, getForecastWeather } from "../services/weather";


/**
 * 搜尋指定城市的當天天氣資訊 和 未來五天資訊，並將 api 回傳的資訊，整理成可以呈現在畫面上的格式。
 *
 * @param {*} setCurrentWeatherInfo - 設定當前天氣資訊
 * @param {*} setForecastInfo - 設定未來五天天氣資訊
 * @return {*} 
 */
const useWeatherFetchAndProcess = (setCurrentWeatherInfo, setForecastInfo) => {
  const [state, dispatch] = useContext(ReducerContext);

  const fetchWeatherInfo = async (city) => {
    dispatch({type: 'OPEN', reducerName: 'globalLoading'})
    try {
      const [currentWeatherInfo, forecastInfo] = await Promise.all([getCurrentWeather(city.lat, city.lon), getForecastWeather(city.lat, city.lon)]);
      let tempForecastInfoInMap = new Map(); // 用來儲存未來五天的天氣資訊，預計的儲存格式 {{key: 3, val: []}, {key: 4, val: []}}
      let wholeDayInfoInArr = []; // 用來暫存同一天的每一個時刻的天氣資訊 (i.e. 2023-12-13 的 02:00, 04:00, etc 的每一個時刻的天氣資訊)
      forecastInfo.list.map(info => {
        const day = new Date(info.dt*1000).getDay();
        if(new Date(info.dt*1000).getDate() !== new Date().getDate()) { // 只需要呈現未來五日的資訊，所以，當日的資料不塞入 (e.g. 若當日為 2023-12-12 則不將 2023-12-12 號的資料塞入)
          if(!tempForecastInfoInMap.has(day)) wholeDayInfoInArr = []; // 若 Map 裡面還沒有儲存過該天的資料，代表已經陣列已經遍歷到另外一天的資訊，則將暫存該天天氣資訊的陣列清空，準備來儲存新的一天的天氣資訊
          wholeDayInfoInArr.push(info);
          tempForecastInfoInMap.set(day, wholeDayInfoInArr)
        }
      })

      setCurrentWeatherInfo(currentWeatherInfo)
      setForecastInfo(tempForecastInfoInMap);
      dispatch({type: 'CLOSE', reducerName: 'globalLoading'})
    }
    catch(err) {
      dispatch({
        reducerName: 'globalModalInfo',
        type: 'OPEN',
        message: err.message,
        modalType: 'Danger'
      })
      dispatch({type: 'CLOSE', reducerName: 'globalLoading'})
    }
  }

  return {
    fetchWeatherInfo
  }
}

export default useWeatherFetchAndProcess;