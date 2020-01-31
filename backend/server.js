import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import booksData from './data/books.json'

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

const PER_PAGE = 2


// GET /books
app.get('/books', (req, res) => {
  const { page } = req.query
  const startIndex = PER_PAGE * +page
  const data = booksData.slice(startIndex, startIndex + PER_PAGE)

  res.json({
    totalPages: Math.floor(booksData.length / PER_PAGE),
    currentPage: +page,
    data
  })
})

app.get('/books/:id', (req, res) => {
  const { id } = req.params
  const foundBook = booksData.find((book) => book.bookID === +id)
  if (foundBook) {
    res.json(foundBook)
  } else {
    res.status(404).json({ message: 'Not found' })
  }
})






// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
