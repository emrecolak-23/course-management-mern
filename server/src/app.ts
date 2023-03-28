// Import Dependencies
import express from 'express'
import 'express-async-errors'
import cookieSession from 'cookie-session'

// Import Routes
import { signoutRouter, currentuserRouter, signupRouter, signinRouter } from './routes/auth/index'
import { listCourseRouter, createCourseRouter, showCourseRouter, updateCourseRouter, deleteCourseRouter} from './routes/course/index'

// Import Error
import { NotFoundError } from './errors/not-found-error'

// Import Middlewares
import { errorHandler } from './middlewares/error-handler'
import { currentUser } from './middlewares/current-user'
// Initialize express
const app = express()

// Middlewares
app.use(express.json())
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV === 'production'
    })
)
app.use(currentUser)
// Aut Routes
app.use(currentuserRouter)
app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)
// Course Routes
app.use(listCourseRouter)
app.use(createCourseRouter)
app.use(showCourseRouter)
app.use(updateCourseRouter)
app.use(deleteCourseRouter)

app.all('*', async (req, res, next) => {
    next(new NotFoundError())
})

app.use(errorHandler)


export {app}