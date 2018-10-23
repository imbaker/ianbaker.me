import React from "react"
import { graphql } from "gatsby"

export default ({data}) => (
    <div style={{color: 'teal'}}>
        <h4>{data.allDataJson.totalCount} Concerts</h4>
        {data.allDataJson.edges.map(({node}, index) => (
            <div key={node.id}>
                <h4>
                    {(index+1)}. {node.date}{" "}—{" "}{node.location}
                </h4>
            </div>
        ))}
    </div>
)

export const query = graphql`
    query {
        allDataJson(sort: { order: ASC, fields: [date] }) {
            totalCount
            edges {
                node {
                    id
                    location
                    date(formatString: "ddd DD MMMM YYYY")
                }
            }
        }
    }
`
