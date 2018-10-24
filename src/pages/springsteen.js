import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Concert from '../components/concert'

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
          <Concert index = {index+1} date = {node.date} location = {node.location} />
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
