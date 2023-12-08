import { useState } from 'react'
import './App.scss'
import SearchBar from './components/searchBar/SearchBar';

function App() {

  return (
    <div className='max-w-[1024px] px-3 pt-3 mx-auto text-center'>
      <SearchBar />
      <h1 className="text-[#50d71e]">
        Hello world!
      </h1>
      <p className='test'>test</p>
    </div>
  )
}

export default App
