// Import Dependencies
import express, {Request, Response} from 'express'

// Create router
const router = express.Router()

router.post('/api/users/signup', (req: Request, res: Response) => {
    res.send({})
})

export { router as signupRouter }