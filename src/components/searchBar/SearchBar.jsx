import PropTypes from 'prop-types';

const SearchBar = ({inputVal, onInputChange, isCityListLoading}) => {
  
  return (
    <form 
      onSubmit={null}
      className={[
        "relative z-[2] bg-White flex items-center border-black border-[1px] border-solid rounded-[2rem] pl-3 pr-2",
        isCityListLoading && 'opacity-40'
      ].join(' ')}
    >
      <input 
        className="grow bg-transparent"
        placeholder='Please Input City Name(e.g. Taipei)'
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