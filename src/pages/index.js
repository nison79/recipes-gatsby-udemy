import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

import AllRecipes from '../components/AllRecipes'



export default function Home() {
  return (
    <Layout>
      <Seo title="Home"  />
      <main className="page">
        <header className="hero">
          <StaticImage 
          src="../assets/images/main.jpeg" 
          alt="eggs" 
          className="hero-img" 
          placeholder="tracedSvg" 
          layout="fullWidth" 
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
      <AllRecipes />
      </main>
    </Layout>
  ) 
}
