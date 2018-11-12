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
        </li>
        {data.allDataJson.edges.map(({ node }, index) => (
            <Concert key = { node.id } index = { index + 1 } date = {node.date} location = {node.location} />
        ))}
      </ul>
    </div>
    <div className={styles.container}>
      <h3>{data.allPrismicConcerts.totalCount} concerts</h3>
      <ul className={styles.responsivetable}>
        <li className={styles.tableheader}>
            <div className={styles.col1}>#</div>
            <div className={styles.col2}>Date</div>
            <div className={styles.col3}>Location</div>
        </li>
        {data.allPrismicConcerts.edges.map(({ node }, index) => (
          <div key={ node.id }>
            <Concert key = { node.id } index = { index + 1 } date = {node.data.date} location = {node.data.location.text} />
            <Songs key = { node.id } songs = { node.data.songs } />
          </div>
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
          date(formatString: "ddd D MMMM YYYY")
        }
      }
    }
    allPrismicConcerts(sort: { order: ASC, fields: [data___date]  }) {
      totalCount
      edges {
        node {
          data {
            location {
              html
              text
            }
            date(formatString: "ddd D MMMM YYYY")
            songs {
              song_title {
                html
                text
              }
            }
          }
        }
      }
    }
  }
`
