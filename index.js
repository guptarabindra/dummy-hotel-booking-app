import express from 'express'
import cors from 'cors'
import PrductRouter from './routes/v1/ProductRoute.js'
import BookingRoute from  './routes/v1/BookingRoute.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.APP_PORT || 3000

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log("Middleware....");
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to hotel booking app')
})

app.use(PrductRouter)
app.use(BookingRoute)

// If route does not exist
app.use(function(req, res, next) {
    res.status(404);
    res.json({status:404,message:"Route not found"});
    next();
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})