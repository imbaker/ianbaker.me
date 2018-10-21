import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default ({data}) => (
    <div style={{color: 'teal'}}>
        <h1>{data.site.siteMetadata.title}</h1>
    </div>
)

