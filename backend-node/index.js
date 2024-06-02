const express = require('express')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get("/status", (_request, response) => {
  const status = {
    Status: "Running",
  }
  response.send(status)
})

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`)
})
