import express, { type Request, type Response } from 'express'

export const productRouter = express.Router()

//@ /products 
productRouter.use("/create", function(request: Request, response: Response){
  response.send("Добавление товара");
})

productRouter.use("/:id", function(request: Request, response: Response){
  response.send(`Товар ${request.params.id}`)
})

productRouter.use("/", function(request: Request, response: Response){
  response.send("Список товаров")
})