import express from "express"
import { exec } from "shelljs"

const app = express()

app.use(express.json())

app.post('/javascript', (req, res) => {
  const { content } = req.body
  const result = exec(`node -p "${content}"`, { silent: true }).stdout.split('\n').reverse().splice(2).join('')
  res.json({
    success: true,
    content: result
  })
})

app.post('/python', (req, res) => {
  const { content } = req.body
  const result = exec(`python3 -c "${content}"`).stdout
  res.json({
    success: true,
    content: result
  })
})

app.post('/php', (req, res) => {
  const { content } = req.body
  const result = exec(`php -r "${content}"`, { silent: true }).stdout
  res.json({
    success: true,
    content: result
  })
})

app.listen(8000)