import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import productRoute from '../routes/product';
import postRoute from '../routes/post';
import categoryRoute from '../routes/category'
import bannerRoute from '../routes/banner'
import userRoute from '../routes/auth'
import UsersRoute from '../routes/user'
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
//route products
app.use("/api", productRoute);

//route post
app.use("/api", postRoute);
//route category
app.use('/api', categoryRoute)
    //user
app.use('/api', userRoute)
    // connect db
app.use('/api', bannerRoute)
    // route

app.use('/api', UsersRoute)

mongoose.connect('mongodb://localhost:27017/we16309')
    // mongoose.connect('mongodb://127.0.0.1:27017/web1639')

.then(() => console.log("Kết nối DB thành công"))
    .catch((error) => console.log(error))
    //connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});