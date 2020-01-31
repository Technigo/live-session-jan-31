import React from 'react'

// <Book book={jsonObject} />

export const Book = ({ book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.authors}</h3>
    </div>
  )
}
