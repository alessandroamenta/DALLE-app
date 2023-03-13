import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb+srv://sandro:sandro123@cluster0.shnlhwq.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
}

export default connectDB