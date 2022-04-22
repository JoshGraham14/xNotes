import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { connectDB } from './config/db'
import { noteRoutes } from './routes/noteRoutes'
import { userRoutes } from './routes/userRoutes'


const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/notes', noteRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`))