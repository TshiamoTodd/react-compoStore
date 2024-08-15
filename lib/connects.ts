'use server'

import mongoose from 'mongoose'

export async function connect(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log('Connected to the database')
    } catch (error) {
        console.log(error)
    }
}

export default connect