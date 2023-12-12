import PropTypes from 'prop-types';

/**
 * 全屏 loading 效果
 *
 * @param {*} isShow - 是否要顯示 loading 效果
 * @return {*} 
 */
const GlobalLoading = ({isShow}) => {
  return (
    <div 
      className={[
        "fixed top-[0] left-[0] w-full h-full bg-Black-500 z-[5] flex items-center justify-center",
        isShow ? '' : 'hidden' 
      ].join(' ')}
    >
      <p className="text-White text-[4rem] font-Inter">Loading...</p>
    </div>
  )
}

export default GlobalLoading;

GlobalLoading.propTypes = {
  isShow: PropTypes.bool
}