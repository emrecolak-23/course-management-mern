import express, {Request, Response} from 'express'
import { Course } from '../../models/course'
import { requireAuth } from '../../middlewares/require-auth'
const router = express.Router()

router.get('/api/courses', requireAuth, async (req: Request, res: Response) => {
    
    const courses = await Course.find({})

    res.send(courses)
})

export {router as listCourseRouter}