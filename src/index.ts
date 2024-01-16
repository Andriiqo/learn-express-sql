import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, '/public'), {extensions: ['html']}));

app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', urlencodedParser, (req, res) => {
    console.log('req', req.body)
    if(!req.body?.userName || !req.body?.userAge) return res.sendStatus(400)

    res.send(`${req.body.userName} - ${req.body.userAge}`);
})

app.listen(port, () => {
    console.log(`Server has been started on ${port} port`)
})
 