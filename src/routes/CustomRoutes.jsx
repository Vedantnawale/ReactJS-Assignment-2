import React from 'react'
import GithubDex from '../components/GithubDex/GithubDex'
import GitDetails from '../components/GitDetails/GitDetails'
import { Route, Routes } from 'react-router-dom'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<GithubDex />} />
        <Route path="/github/:id" element={<GitDetails />} />
    </Routes>
  )
}

export default CustomRoutes