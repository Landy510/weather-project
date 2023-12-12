import { useState, useContext } from 'react';
import {GlobalLoadingContext} from './components/globalContextBoundary/GlobalContextBoundary';

import SearchArea from './components/searchArea/SearchArea';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DailyWeather from './components/dailyWeather/DailyWeather';

function App() {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(new Map());
  const {isGlobalLoading} = useContext(GlobalLoadingContext);

  return (
    <div className='max-w-[1024px] px-3 pb-2 mx-auto'>
        <h1 className='text-center text-[3rem] relative z-[2] bg-Grey'>
          <span className='font-thin'>Weather  </span> 
          <span className='font-Inter'>Forecast</span>
        </h1>

        <SearchArea 
          setCurrentWeatherInfo={setCurrentWeatherInfo}
          setForecastInfo={setForecastInfo}
        />

        {/* 當正在執行天氣資訊 api 的資料索取時，有關呈現天氣資訊的區域會加這一個效果 */}
        <div className={isGlobalLoading ? 'opacity-40' : 'opacity-100'}> 
          {/* 當天氣資訊 api 索取完成後，讓天氣整體區塊透過 'loaded' 動畫的轉換，來提醒使用者新的天氣資訊已經更新 */}
          <div className={isGlobalLoading ? '' : 'loaded'}>
            {
              !currentWeatherInfo && [...forecastInfo.keys()].length === 0 ?
              <p className='text-[3rem] font-thin text-center mt-10'>- No Related Weather Info -</p>
              :
              <>
                <CurrentWeather data={currentWeatherInfo} />
                <div className='mt-4'>
                  <h3 className='text-4xl mb-3 font-Inter'>Forecast</h3>
                  {
                    [...forecastInfo.entries()].map(([key, val]) => {
                      return (
                        <DailyWeather 
                          key={key}
                          day={key}
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
