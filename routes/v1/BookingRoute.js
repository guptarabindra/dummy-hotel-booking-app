import express from 'express'
import { getBooking, createBooking } from '../../controller/BookingController.js'

const router = express.Router()

router.post('/api/v1/booking', createBooking)
router.get('/api/v1/bookings', getBooking)
//router.get('/api/v1/booking/:id', getProductById)

export default router