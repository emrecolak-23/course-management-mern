// Import Dependencies
import express, {Request, Response} from 'express'
import { body } from 'express-validator'
import { BadRequestError } from '../../errors/bad-request-error'
import { validateRequest } from '../../middlewares/validate-request'
import jwt from 'jsonwebtoken'

import { User } from '../../models/user'
// Create router
const router = express.Router()

router.post('/api/users/signup', 
    [
        body('displayName')
            .not()
            .isEmpty()
            .withMessage('Displayname must be valid'),
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({min: 4, max:20})
    ]
, validateRequest, async (req: Request, res: Response) => {
    const {displayName, email, password } = req.body

    const existingUser = await User.findOne({email})

    if(existingUser) {
        throw new BadRequestError('Email in use')
    }

    const user = User.build({displayName, email, password})
    await user.save()

    // Generate JWT
    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!)
    // Store user on session object
    req.session = {
        jwt: userJwt
    }

    res.status(201).send(user)
})

export { router as signupRouter }