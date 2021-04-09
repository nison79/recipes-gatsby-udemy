import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link,graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'

const About = ({ data:{allContentfulRecipe:{nodes:recipes}} }) => {
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
      <section className="featured-recipes">
        <h5>Look at this awesome food!!!</h5>
        <RecipesList recipes={recipes} />
      </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About

