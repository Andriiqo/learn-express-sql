import express, { type Express } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { productRouter, userRouter } from './Router'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public'), {extensions: ['html']}))

app.use("/products", productRouter)
app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`Server has been started on ${port} port`)
})
 