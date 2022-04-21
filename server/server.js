require('dotenv/config')
const express = require('express')
const app = express()
//ROUTES
const aptRoutes = require('./routes/aptRoutes')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/api/appoitments', aptRoutes)
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
)
