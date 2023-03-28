// Import Dependencies
import express, {Request, Response} from 'express'

// Create router
const router = express.Router()

router.get('/api/users/signout', (req: Request, res: Response) => {
    req.session = null
    res.cookie('session', '', { maxAge: 0 });

    res.send(null)
})

export { router as signoutRouter}