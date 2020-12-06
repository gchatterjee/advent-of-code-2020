import React from 'react'
import Card from './card'

export default class Calendar extends React.Component {
  render() {
    const startIndex = 2 // December 1 is Tuesday
    const daysInWeek = 7
    const daysInDecember = 31
    const endIndex = startIndex + daysInDecember

    const weeks = Math.ceil(endIndex / daysInWeek)

    const calendar = [...new Array(daysInWeek)].map((_, col) =>
      [...new Array(weeks)].map((_, row) => {
        const i = row * daysInWeek + col
        if (i < startIndex || i >= endIndex) return 0
        return i + 1 - startIndex
      }),
    )

    console.log(weeks, calendar)

    return (
      <section id='calendar'>
        <div className='tile is-ancestor'>
          {calendar.map((col, i) => (
            <div
              className={`tile is-parent is-vertical is-${weeks}`}
              key={`col-${i}`}
            >
              {col.map((day) => (
                <Card day={day} key={`day-${day}`}></Card>
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }
}
