import PropTypes from 'prop-types';


/**
 * 城市搜尋輸入欄位
 *
 * @param {*} inputVal - 綁定到 input 欄位上的值
 * @param {*} onInputChange - input 欄位的 onChange 事件會觸發的綁定事件
 * @param {*} isCityListLoading - 判斷是否正在取得成是列表的旗標
 * @return {*} 
 */
const SearchBar = ({inputVal, onInputChange, isCityListLoading}) => {
  
  return (
    <form 
      onSubmit={null}
      className={[
        "relative z-[3] bg-White flex items-center shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-[2rem] pl-3 pr-2 mt-2",
        isCityListLoading ? 'opacity-40' : ''
      ].join(' ')}
    >
      <input 
        className="w-[1px] grow bg-transparent"
        placeholder='Please Input City Name (e.g. Taipei)'
        type="text"
        value={inputVal}
        onChange={e => onInputChange(e)}
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
  onInputChange: PropTypes.func,
  isCityListLoading: PropTypes.bool
}