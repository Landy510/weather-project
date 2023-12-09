import PropTypes from 'prop-types';

const AccordionItem = ({lat, lon, cityName, isEmpty}) => {
  return (
    <li 
      className="p-3 cursor-pointer hover:bg-slate-50"
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
  isEmpty: PropTypes.bool
}