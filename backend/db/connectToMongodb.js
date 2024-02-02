import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log('Error connecting server', error.message)
    }
}

export default connectToMongodb