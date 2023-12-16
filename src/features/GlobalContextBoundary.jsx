import { useState, createContext, useReducer } from "react";
import PropTypes from 'prop-types';

import { reducers } from "@/core/reducers/reducer";

export const ReducerContext= createContext(null);

const initState = reducers();

/**
 * 用來管理專案裡會用到的全域 Context 的元件
 *
 * @param {*} {children} - 映射內容
 * @return {*} 
 */
const GlobalContextBoundary = ({children}) => {
  const reducer = useReducer(reducers, initState)
  
  return (
    <ReducerContext.Provider value={reducer}>
      {children}
    </ReducerContext.Provider>
  )
}

export default GlobalContextBoundary;

GlobalContextBoundary.propTypes = {
  children: PropTypes.element
}