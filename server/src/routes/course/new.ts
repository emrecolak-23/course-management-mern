import express, {Request, Response} from 'express'
import { body } from 'express-validator'
import { requireAuth } from '../../middlewares/require-auth'
import { validateRequest } from '../../middlewares/validate-request'

import { Course } from '../../models/course'


const router = express.Router()

router.post('/api/courses', requireAuth, [
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
], validateRequest, async (req: Request, res: Response) => {

    const {name, description, category, price } = req.body

    const course = Course.build({
        name, description, category, price
    })

    await course.save()

    res.status(201).send(course)
})

export {router as createCourseRouter}