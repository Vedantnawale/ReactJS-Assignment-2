import React, { useState } from 'react'
import Search from '../Search/Search'
import GithubList from '../GithubList/GithubList'
import GitDetails from '../GitDetails/GitDetails'

const GithubDex = () => {

    const [serachTerm, setSearchTerm] = useState('')

  return (
    <div className='githubdex-wrapper'>
        <Search updateSearchTerm = {setSearchTerm} />
        {(!serachTerm) ? <GithubList /> : <GitDetails key={serachTerm} githubName={serachTerm} />}
    </div>
  )
}

export default GithubDex