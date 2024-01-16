import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '/public'), {extensions: ['html']}));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const userName = req.query.name;
    res.send(`<h1>Информация</h1><p>id: ${id}</p><p>name: ${userName}</p>`);
})


app.listen(port, () => {
    console.log(`Server has been started on ${port} port`)
})
 