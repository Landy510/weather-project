import { useState } from 'react';
import { globalLoadingContext } from './core/context/GlobalLoadingContext';
import { weatherContext } from './core/context/WeatherContext';
import SearchArea from './components/searchArea/SearchArea';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DailyWeather from './components/dailyWeather/DailyWeather';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState([]);

  return (
    <div className='max-w-[1024px] px-3 mx-auto'>
      <h1 className='text-center text-[3rem] relative z-[2] bg-Grey'>
        <span className='font-thin mr-4'>Weather</span> 
        <span className='font-Inter'>Forecast</span>
      </h1>
      <globalLoadingContext.Provider value={{isLoading, setIsLoading}}>
        <weatherContext.Provider value={{setCurrentWeatherInfo, setForecastInfo}}>
          <SearchArea />
        </weatherContext.Provider>
      </globalLoadingContext.Provider>

      {/* 當正在執行天氣資訊 api 的資料索取時，有關呈現天氣資訊的區域會加這一個效果 */}
      <div className={isLoading ? 'opacity-40' : 'opacity-100'}> 
        {/* 當天氣資訊 api 索取完成後，讓天氣整體區塊透過 'loaded' 動畫的轉換，來提醒使用者新的天氣資訊已經更新 */}
        <div className={isLoading ? '' : 'loaded'}>
          {
            !currentWeatherInfo && forecastInfo.length === 0 ?
            <p className='text-[3rem] font-thin text-center mt-10'>- No Related Weather Info -</p>
            :
            <>
              <CurrentWeather data={currentWeatherInfo} />
              <div className='mt-4'>
                <h3 className='text-4xl mb-3 font-Inter'>Forecast</h3>
                {
                  Object.entries(forecastInfo).map(([keyVal, val]) => {
                    return (
                      <DailyWeather 
                        key={keyVal}
                        day={keyVal}
                        val={val}
                      /> 
                    )
                  })
                }
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default App
