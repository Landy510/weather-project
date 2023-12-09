import PropTypes from 'prop-types';

const SearchBar = ({inputVal, onInputChange}) => {
  
  return (
    <form 
      onSubmit={null}
      className="relative z-[2] bg-[#fff] flex items-center border-black border-[1px] border-solid rounded-[2rem] pl-3 pr-2"
    >
      <input 
        className="grow"
        type="text"
        value={inputVal}
        onChange={e => onInputChange(e)}
      />
      <span className="material-symbols-outlined">search</span>
    </form>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  inputVal: PropTypes.string,
  onInputChange: PropTypes.func
}