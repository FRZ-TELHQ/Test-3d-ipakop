import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Test 3d</title>
        <meta property="og:title" content="Test 3d" />
      </Helmet>
      <div className="home-container1">
        <span>dsadwadwdawdewf</span>
      </div>
    </div>
  )
}

export default Home
