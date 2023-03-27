// Import Dependencies
import express, {Request, Response} from 'express'
import { body } from 'express-validator'
import { BadRequestError } from '../../errors/bad-request-error'
import { validateRequest } from '../../middlewares/validate-request'

import { User } from '../../models/user'
// Create router
const router = express.Router()

router.post('/api/users/signup', 
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({min: 4, max:20})
    ]
, validateRequest, async (req: Request, res: Response) => {
    const {email, password } = req.body

    const existingUser = await User.findOne({email})

    if(existingUser) {
        throw new BadRequestError('Email in use')
    }

    const user = User.build({email, password})
    await user.save()
    res.status(201).send(user)
})

export { router as signupRouter }