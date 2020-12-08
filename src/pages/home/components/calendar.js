import React from 'react'

import Card from './card'

export default class Calendar extends React.Component {
  render() {
    const startIndex = 2 // December 1 is Tuesday
    const daysInWeek = 7
    const daysInDecember = 31
    const endIndex = startIndex + daysInDecember

    const weeks = Math.ceil(endIndex / daysInWeek)

    const calendar = [...new Array(weeks)].map((_, row) =>
      [...new Array(daysInWeek)].map((_, col) => {
        const i = row * daysInWeek + col
        if (i < startIndex || i >= endIndex) return 0
        return i + 1 - startIndex
      }),
    )

    return (
      <div className='container-fluid' id='calendar'>
        {calendar.map((row, i) => (
          <div className='row' key={`week-${i}`}>
            {row.map((day, j) => (
              <Card day={day} key={`day-${j}`}></Card>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
