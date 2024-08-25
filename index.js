import express from "express"
import { fileURLToPath } from "url"
import path from "path"
const PORT = 8080
const rootDir = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json())
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
// Serve the root route with coffeeai.html
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "./code2024/", "coffeeai.html"))
})
// Serve static files
app.use(express.static(path.join(rootDir, "./code2024")))
