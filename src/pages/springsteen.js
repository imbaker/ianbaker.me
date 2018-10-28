import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './springsteen.module.css'

const Concert = props => (
  <tr>
    <td>{props.index}</td>
    <td className={styles.date}>{props.date}</td>
    <td className={styles.location}>{props.location}</td>
  </tr>
)

export default ({ data }) => (
  <Layout subTitle='Bruce Springsteen Concerts'>
    <div>
      <h4>{data.allDataJson.totalCount} concerts</h4>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>  
        <tbody className={styles.concerts}>
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
