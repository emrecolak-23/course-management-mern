import express, {Request, Response} from 'express'
import { Course } from '../../models/course'
import { NotFoundError } from '../../errors/not-found-error'
import { requireAuth } from '../../middlewares/require-auth'
const router = express.Router()

router.get('/api/courses/:id', requireAuth, async (req: Request, res: Response) => {
    const {id} = req.params
    const course = await Course.findById(id)

    if(!course) {
        throw new NotFoundError()
    }

    res.send(course)

})

export {router as showCourseRouter}