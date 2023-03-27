import express, {Request, Response} from 'express'

const router = express.Router()


router.patch('/api/courses/:id', (req: Request, res:Response) => {
    res.send({})
})

export {router as updateCourseRouter}