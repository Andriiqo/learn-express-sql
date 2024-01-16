import express, { type Request, type Response } from 'express'

export const userRouter = express.Router()

//@ /user
userRouter.post("/", (request: Request, response: Response) => {
    const user = request.body
    if(!user) return response.sendStatus(400)

    response.json(user);
})
