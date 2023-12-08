import PropTypes from 'prop-types';

const AccordionItem = ({lat, lon, cityName, setIsAccordionShow, isEmpty}) => {
  return (
    <li 
      className="p-3 cursor-pointer hover:bg-slate-50"
      onClick={() => setIsAccordionShow(false)}
    >
      {
        isEmpty ? 
        <p>No Related Result</p>
        :
        cityName
      }
    </li>
  )
}

export default AccordionItem;

AccordionItem.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
  cityName: PropTypes.string,
  setIsAccordionShow: PropTypes.func,
  isEmpty: PropTypes.bool
}