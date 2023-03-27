import express, {Request, Response} from 'express'

const router = express.Router()

router.delete('/api/courses/:id', (req: Request, res: Response) => {
    res.send({})
})

export {router as deleteCourseRouter}