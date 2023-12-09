import './App.scss';
import SearchArea from './components/searchArea/SearchArea';
import CurrentWeather from './components/currentWeather/CurrentWeather';

function App() {

  return (
    <div className='max-w-[1024px] px-3 pt-3 mx-auto'>
      <SearchArea />
      <CurrentWeather />
    </div>
  )
}

export default App
