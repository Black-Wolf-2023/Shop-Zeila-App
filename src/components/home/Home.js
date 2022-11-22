import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../header/Header'
import { Nav } from '../nav-bar/Nav'

export const Home = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </>
  )
}
