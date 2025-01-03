import express from 'express'
import { getProducts, getProductById } from '../../controller/ProductController.js'

const router = express.Router()

router.get('/api/v1/hotels', getProducts)
router.get('/api/v1/hotel/:id', getProductById)

export default router