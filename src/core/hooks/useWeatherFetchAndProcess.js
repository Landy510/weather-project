import { useContext } from "react";
import { GlobalLoadingContext } from "@/components/globalContextBoundary/GlobalContextBoundary";
import { getCurrentWeather, getForecastWeather } from "../services/weather";

const useWeatherFetchAndProcess = (setCurrentWeatherInfo, setForecastInfo) => {
  const {setIsGlobalLoading} = useContext(GlobalLoadingContext);

  const fetchWeatherInfo = async (city) => {
    setIsGlobalLoading(true);
    try {
      const [currentWeatherInfo, forecastInfo] = await Promise.all([getCurrentWeather(city.lat, city.lon), getForecastWeather(city.lat, city.lon)]);
      let tempForecastInfo = {}
      forecastInfo.list.map(info => {
        const day = new Date(info.dt*1000).getDay();
        if(new Date(info.dt*1000).getDate() !== new Date().getDate()) { // 只需要呈現未來五日的資訊，所以，當日的資料不塞入
          if(!tempForecastInfo[day]) tempForecastInfo[day] = [] 
          tempForecastInfo[day].push(info)
        }
      })

      setCurrentWeatherInfo(currentWeatherInfo)
      setForecastInfo(tempForecastInfo);
      setIsGlobalLoading(false);
    }
    catch(err) {
      setIsGlobalLoading(false);
    }
  }

  return {
    fetchWeatherInfo
  }
}

export default useWeatherFetchAndProcess;