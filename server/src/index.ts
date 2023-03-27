// Import Dependencies
import express from 'express'

// Import Routes
import { currentuserRouter } from './routes/auth/current-user'
import { signupRouter } from './routes/auth/signup'
import { signinRouter } from './routes/auth/signin'
import { signoutRouter } from './routes/auth/signout'

// Initialize express
const app = express()

// Middlewares
app.use(express.json())

app.use(currentuserRouter)
app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)

// Listen Server
app.listen(3000, () => {
    console.log('Listening on port', 3000)
})