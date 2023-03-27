// Import Dependencies
import express, {Request, Response} from 'express'

// Create router
const router = express.Router()

router.get('/api/users/currentuser', (req: Request, res: Response) => {
    res.send({})
})

export {router as currentuserRouter}