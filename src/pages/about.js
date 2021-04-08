import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Etsy fashion axe snackwave, jianbing raw denim knausgaard raclette tofu mlkshk palo santo tbh mustache. Mlkshk chicharrones hashtag butcher. Prism cred wolf, godard tbh VHS </p>
            <p>Fam 90's selfies, +1 man braid leggings heirloom kale chips cray 3 wolf moon. Bushwick pok pok hot chicken trust fund polaroi</p>
            <Link to-="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage 
          src="../assets/images/about.jpeg" 
          alt="person pouring salt in bowl"
          className ="about-img"
          placeholder="blurred"
          >
            
          </StaticImage>
        </section>
      </main>
    </Layout>
  )
}

export default About
