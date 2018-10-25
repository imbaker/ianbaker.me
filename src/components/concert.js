import React from 'react'

export default (props) => (
  <tr css={{ ':hover': { background: '#FFD07B' } }}>
    <td css={{ 'paddingLeft': '1.04167rem' }}>{props.index}</td>
    <td>{props.date}</td>
    <td>{props.location}</td>
  </tr>
)
