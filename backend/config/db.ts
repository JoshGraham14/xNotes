import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        console.log('trying to connect to db')
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log('didnt connect to db')
		console.log(error)
		process.exit(1)
	}
}