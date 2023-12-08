import PropTypes from 'prop-types';

import AccordionItem from "../accordionItem/AccordionItem";

const Accordion = ({
  isAccordionShow, 
  setIsAccordionShow,
  cityList
}) => {
  return (
    <ul className={[
      'absolute left-[0] right-[0] z-[1] mx-3 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-[0.5rem] max-h-[14rem] overflow-y-auto bg-[#fff] duration-500',
      isAccordionShow ? 'translate-y-3' : '-translate-y-[250%]'
    ].join(' ')}>
      {
        cityList.length === 0 ?
        <AccordionItem 
          isEmpty={true} 
          setIsAccordionShow={setIsAccordionShow}
        />
        :
        cityList.map((city, index) => {
          return <AccordionItem 
            key={index}
            lat={city.lat}
            lon={city.lon}
            cityName={city.cityName}
            setIsAccordionShow={setIsAccordionShow}
            isEmpty={false}
          />
        })
      }
    </ul>
  )
}

export default Accordion;

Accordion.propTypes = {
  isAccordionShow: PropTypes.bool,
  setIsAccordionShow: PropTypes.func,
  cityList: PropTypes.array
}