// Import Dependencies
import express from 'express'
import 'express-async-errors'
import cookieSession from 'cookie-session'
import cors from 'cors'

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
app.use(cors({credentials: true,  origin: 'http://localhost:5173'}))
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

app.use(errorHandler)

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like main.js or main.css files
    app.use(express.static('../client/dist/assets'));
    // Express will serve up index.html file
    // if doesnt recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'client', 'dist', 'index.html'));
    });
}



export {app}