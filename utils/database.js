import mongoose from "mongoose";

let isConnected = false;

const connectToDb = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'cipherx',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log("MongoDB connected")
    } catch(error) {
        console.error(error)
    }
}

export default connectToDb