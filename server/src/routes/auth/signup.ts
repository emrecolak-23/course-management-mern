// Import Dependencies
import express, {Request, Response} from 'express'
import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../../errors/request-validation-error'
import { validateRequest } from '../../middlewares/validate-request'
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
, validateRequest,(req: Request, res: Response) => {
    const {email, password } = req.body

    res.send({})
})

export { router as signupRouter }