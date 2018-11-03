import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './springsteen.module.css'

const Concert = props => (
  <li className={styles.tablerow}>
    <div className={styles.col1}>{props.index}</div>
    <div className={styles.col2}>{props.date}</div>
    <div className={styles.col3}>{props.location}</div>
  </li>
)

export default ({ data }) => (
  <Layout subTitle='Bruce Springsteen Concerts'>
    <div className={styles.container}>
      <h4>{data.allDataJson.totalCount} concerts</h4>
      <ul className={styles.responsivetable}>
        <li className={styles.tableheader}>
            <div className={styles.col1}>#</div>
            <div className={styles.col2}>Date</div>
            <div className={styles.col3}>Location</div>
        </li>
        {data.allDataJson.edges.map(({ node }, index) => (
          <Concert key = { node.id } index = { index + 1 } date = {node.date} location = {node.location} />
        ))}
      </ul>
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
