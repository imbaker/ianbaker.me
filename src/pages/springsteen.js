import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Concert from '../components/concert'

export default ({ data }) => (
  <Layout subTitle='Bruce Springsteen Concerts'>
    <div>
      <h4>{data.allDataJson.totalCount} concerts</h4>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
          {data.allDataJson.edges.map(({ node }, index) => (
            <Concert key = { node.id } index = { index + 1 } date = {node.date} location = {node.location} />
          ))}
        </tbody>
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
