import express, {Request, Response} from 'express'

const router = express.Router()

router.get('/api/courses/:id', (req: Request, res: Response) => {
    res.send({})
})

export {router as showCourseRouter}