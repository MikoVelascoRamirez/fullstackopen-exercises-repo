import React from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
      <td><p>{text}</p></td>
      <td><p>{value}</p></td>
    </>
  )
}

export default StatisticLine