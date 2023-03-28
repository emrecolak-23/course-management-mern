import express, {Request, Response} from 'express'
import { NotFoundError } from '../../errors/not-found-error'
import { requireAuth } from '../../middlewares/require-auth'
import { Course } from '../../models/course'
const router = express.Router()

router.delete('/api/courses/:id', requireAuth,  async (req: Request, res: Response) => {
    const {id} = req.params
    const course = await Course.findById(id)
    
    if(!course) {
        throw new NotFoundError()
    }
    
    await course.deleteOne()

    res.status(204).send(course)
})

export {router as deleteCourseRouter}