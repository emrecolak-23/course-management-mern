// Import Dependencies
import express, {Request, Response} from 'express'
import { body, validationResult } from 'express-validator'
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
        return res.send(errors.array())
    }
    res.send({})
})

export { router as signupRouter }