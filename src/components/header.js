import React from 'react'  // eslint-disable-line no-unused-vars
import { StaticQuery, graphql } from 'gatsby'  

export default ({ data, subTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <h1>
        {data.site.siteMetadata.title} &mdash; {subTitle}
      </h1>
    )}
  />
)
