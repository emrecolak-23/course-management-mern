// Import Dependencies
import express, {Request, Response} from 'express'
import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../../errors/request-validation-error'
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
, (req: Request, res: Response) => {
    const {email, password } = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
       throw new RequestValidationError(errors.array())
    }
    res.send({})
})

export { router as signupRouter }