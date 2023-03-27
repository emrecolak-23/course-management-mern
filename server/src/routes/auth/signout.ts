// Import Dependencies
import express, {Request, Response} from 'express'

// Create router
const router = express.Router()

router.post('/api/users/signout', (req: Request, res: Response) => {
    res.send({})
})

export { router as signoutRouter}