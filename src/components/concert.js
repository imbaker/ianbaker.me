import React from 'react'

export default (props) => (
  <tr css={{ ':hover': { background: '#FFD07B' } }}>
    <td>{props.index}</td>
    <td>{props.date}</td>
    <td>{props.location}</td>
  </tr>
)
