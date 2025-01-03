import hotels from '../DB/store/hotels.js'

export const getProducts = ( (req, res) => {
    try {
        const response = hotels
        res.status(200).json(response) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export const getProductById = ( (req, res) => {
    try {
        const response = hotels.find( hotel => hotel.Id == req.params.id)
        res.status(200).json(response) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})