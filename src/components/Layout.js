import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import 'normalize.css'
import '../assets/css/main.css'

const Layout = ( { children }) => {

  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  )
}

export default Layout
