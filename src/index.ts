import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '/public'), {extensions: ['html']}));

app.use('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server has been started on ${port} port`)
})
