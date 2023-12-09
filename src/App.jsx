import { useState } from 'react';
import { globalLoadingContext } from './core/context/globalLoadingContext';
import SearchArea from './components/searchArea/SearchArea';
import CurrentWeather from './components/currentWeather/CurrentWeather';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='max-w-[1024px] px-3 pt-3 mx-auto'>
      <globalLoadingContext.Provider value={{isLoading, setIsLoading}}>
        <SearchArea />
      </globalLoadingContext.Provider>

      {/* 當正在執行天氣資訊 api 的資料索取時，有關呈現天氣資訊的區域會加這一個效果 */}
      <div className={isLoading ? 'opacity-40' : 'opacity-100'}> 
        {/* 當天氣資訊 api 索取完成後，讓天氣整體區塊透過 'loaded' 動畫的轉換，來提醒使用者新的天氣資訊已經更新 */}
        <div className={isLoading ? '' : 'loaded'}>
          <CurrentWeather />
        </div>
      </div>
    </div>
  )
}

export default App
