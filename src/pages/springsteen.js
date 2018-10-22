import React from "react"
import { graphql } from "gatsby"

export default ({data}) => (
    <div style={{color: 'teal'}}>
        <h4>{data.allDataJson.totalCount} Concerts</h4>
        {data.allDataJson.edges.map(({node}) => (
            <div key={node.id}>
                <h3>
                    {node.id}{" "}{node.location}{" "}
                    <span>
                    — {node.date}
                    </span>
                </h3>
            </div>
        ))}
    </div>
)

export const query = graphql`
    query {
        allDataJson {
            totalCount
            edges {
                node {
                    location
                    date
                }
            }
        }
    }
`
