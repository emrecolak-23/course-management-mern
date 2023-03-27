// Import Dependencies
import express from 'express'
import 'express-async-errors'

// Import Routes
import { currentuserRouter } from './routes/auth/current-user'
import { signupRouter } from './routes/auth/signup'
import { signinRouter } from './routes/auth/signin'
import { signoutRouter } from './routes/auth/signout'

// Import Error
import { NotFoundError } from './errors/not-found-error'

// Import Middlewares
import { errorHandler } from './middlewares/error-handler'

// Initialize express
const app = express()

// Middlewares
app.use(express.json())

app.use(currentuserRouter)
app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)

app.all('*', async (req, res, next) => {
    next(new NotFoundError())
})

app.use(errorHandler)


export {app}