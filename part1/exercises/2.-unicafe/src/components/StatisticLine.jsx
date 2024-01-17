import React from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} <span>{value}</span></p>
  )
}

export default StatisticLine