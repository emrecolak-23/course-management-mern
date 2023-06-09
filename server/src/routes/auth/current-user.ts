// Import Dependencies
import express, {Request, Response} from 'express'
import { currentUser } from '../../middlewares/current-user'

// Create router
const router = express.Router()

router.get('/api/users/currentuser', currentUser, (req: Request, res: Response) => {
    res.send(req.currentUser || null)
})

export {router as currentuserRouter}