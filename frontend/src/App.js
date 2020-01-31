import React, { useState, useEffect } from 'react'
import { Book } from 'components/Book'

export const App = () => {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    fetch(`http://localhost:8080/books?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json.data)
        setTotalPages(json.totalPages)
      })
  }, [page])

  return (
    <div>
      <h1>Showing page {page + 1} of {totalPages + 1}</h1>

      {books.map((book) => (
        <Book key={book.bookID} book={book} />
      ))}

      {page > 0 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          Previous page
        </button>
      )}

      {page < totalPages && (
        <button type="button" onClick={() => setPage(page + 1)}>
          Next page
        </button>
      )}
    </div>
  )
}
