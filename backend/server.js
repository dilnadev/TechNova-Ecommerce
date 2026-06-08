import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from  './routes/productRoutes.js'
import cartRoutes from './routes/cart.js';
import addressRoutes from './routes/address.js';
import orderRoutes from './routes/order.js';
import paymentRoutes from './routes/paymentRoutes.js';




dotenv.config();


const app=express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://tech-nova-ecommerce.vercel.app',
  ],
  credentials: true,
}));
app.use(express.json());   /* middleware when using API */

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/order',   orderRoutes);
app.use('/api/payment', paymentRoutes);


app.get('/',(req,res) => {
    res.send('API is running..');
});

connectDB();

app.listen(5001,() =>{
    console.log('Server is running on Port 5001');
});