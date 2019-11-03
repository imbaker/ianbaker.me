import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './springsteen.module.css'

const Concert = props => (
  <li className={styles.tablerow}>
    <div className={styles.col1}>{props.index}</div>
    <div className={styles.col2}>{props.date}</div>
    <div className={styles.col3}>{props.location}</div>
    <div className={styles.col4}>{props.tour}</div>
  </li>
)

const Songs = props => (
  <ul className={styles.songs}>
    {props.songs.map(function (song) {
      return <li key={ song.key }>{ song.song_title.text }</li>;
    })}
  </ul>
)

export default ({ data }) => (
  <Layout subTitle='Bruce Springsteen Concerts'>
    <div className={styles.container}>
      <h3>{data.allDataJson.totalCount} concerts</h3>
      <ul className={styles.responsivetable}>
        <li className={styles.tableheader}>
            <div className={styles.col1}>#</div>
            <div className={styles.col2}>Date</div>
            <div className={styles.col3}>Location</div>
            <div className={styles.col4}>Tour</div>
        </li>
        {data.allDataJson.edges.map(({ node }, index) => (
            <Concert key = { node.id } index = { index + 1 } date = {node.date} location = {node.location} tour = {node.tour} />
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
          tour
          location
          date(formatString: "ddd D MMMM YYYY")
        }
      }
    }
  }
`
