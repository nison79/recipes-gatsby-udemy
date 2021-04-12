import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql,useStaticQuery} from 'gatsby'

const Seo = ({title,description}) => {
  return (
    <Helmet 
    htmlAttributes={{lang:"en"}}
    title={title} 
    meta={[{name:`description`,content:description }]}>
      
    </Helmet>
  )
}

export default Seo

