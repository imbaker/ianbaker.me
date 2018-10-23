import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <div>
      <h4>{data.allDataJson.totalCount} concerts</h4>
      <table>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Location</th>
        </tr>
        {data.allDataJson.edges.map(({ node }, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{node.date}</td>
            <td>{node.location}</td>
          </tr>
        ))}
      </table>
    </div>
  </Layout>
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
