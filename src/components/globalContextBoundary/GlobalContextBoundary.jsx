import { useState, createContext } from "react";
import PropTypes from 'prop-types';

export const GlobalLoadingContext = createContext(null); // 管理切換全域 loading 旗標的 Context

/**
 * 用來管理專案裡會用到的全域 Context 的元件
 *
 * @param {*} {children}
 * @return {*} 
 */
const GlobalContextBoundary = ({children}) => {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  return (
    <GlobalLoadingContext.Provider value={{isGlobalLoading, setIsGlobalLoading}}>
      {children}
    </GlobalLoadingContext.Provider>
  )
}

export default GlobalContextBoundary;

GlobalContextBoundary.propTypes = {
  children: PropTypes.element
}