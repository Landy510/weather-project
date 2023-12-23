import PropTypes from 'prop-types';


/**
 * 城市搜尋輸入欄位
 *
 * @param {*} inputVal - 綁定到 input 欄位上的值
 * @param {*} setInputValue - 設定 input 欄位的值
 * @param {*} onSearchChange - input 欄位的 onChange 事件會觸發的綁定事件
 * @param {*} isCityListLoading - 判斷是否正在取得成是列表的旗標
 * @return {*} 
 */
const SearchBar = ({inputVal, setInputValue, onSearchChange, isCityListLoading}) => {
  
  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        onSearchChange(e.target['cityName'].value.trim())
      }}
      className={[
        "relative z-[3] bg-White flex items-center shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-[2rem] pl-3 pr-2 mt-2",
        isCityListLoading ? 'opacity-40' : ''
      ].join(' ')}
    >
      <input 
        className="w-[1px] grow bg-transparent"
        placeholder='Please Input City Name (e.g. Taipei)'
        type="text"
        name='cityName'
        value={inputVal}
        onChange={e => setInputValue(e.target.value.trim())}
      />
      <span className="material-symbols-outlined">
        search
      </span>
    </form>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  inputVal: PropTypes.string,
  setInputValue: PropTypes.func,
  onSearchChange: PropTypes.func,
  isCityListLoading: PropTypes.bool
}