import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { productRouter } from './Router/products'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '/public'), {extensions: ['html']}));
 
app.use("/products", productRouter);

app.use("/about", function (request: Request, response: Response) {
  response.send("О сайте");
});
 
app.use("/", function (request: Request, response: Response) {
  response.send("Главная страница");
});

app.listen(port, () => {
    console.log(`Server has been started on ${port} port`)
})
 