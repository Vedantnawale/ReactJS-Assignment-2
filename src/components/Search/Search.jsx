import React from 'react'
import './Search.css'
import useDebounce from '../../hooks/useDebounce'

const Search = ({updateSearchTerm}) => {

    const debounceCallback = useDebounce((e) => updateSearchTerm(e.target.value))
  return (
    <div className='search-wrapper'>
        <input 
        placeholder='profile name ....'
        type='text'
        id='github-name-search'
        onChange={debounceCallback}
         />
    </div>
  )
}

export default Search