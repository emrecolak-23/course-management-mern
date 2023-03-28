import express, {Request, Response} from 'express'
import { body } from 'express-validator'
import { NotFoundError } from '../../errors/not-found-error'
import { requireAuth } from '../../middlewares/require-auth'
import { validateRequest } from '../../middlewares/validate-request'
import { Course } from '../../models/course'
const router = express.Router()


router.put('/api/courses/:id', requireAuth, [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Course name is required'),
    body('description')
        .not()
        .isEmpty()
        .withMessage('Course description is required'),
    body('category')
        .not()
        .isEmpty()
        .withMessage('Course category is required'),
    body('price')
        .isFloat({gt: 0})
        .withMessage('Price must be greater than 0')
        .not()
        .isEmpty()
        .withMessage('Price is required')
], validateRequest, async (req: Request, res:Response) => {

    const {id} = req.params
    const {name, description, category, price} = req.body
    const course = await Course.findById(id)

    if(!course) {
        throw new NotFoundError()
    }

    course.set({
        name,
        description,
        category,
        price
    })

    await course.save()

    res.send(course)
})

export {router as updateCourseRouter}