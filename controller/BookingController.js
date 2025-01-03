import fs from 'fs'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const booking = require("../DB/store/booking.json");

export const createBooking = ( (req, res) => {
    try {
        let newBooking =    {
            "CheckIn": "2024-12-18T00:00:00Z",
            "CheckOut": "2024-12-18T00:00:00Z",
            "Days": 2,
            "RoomNumbers": [2],
            "BookedOn": "2024-12-18T00:00:00Z",
            "Ammount": 4000,
            "Location": "",
            "UserID": 11,
            "HotelID": 11,
            "People": {"children": 1, "adult": 2}
        }

        booking.push(newBooking);
        fs.writeFile(
            "booking",
            JSON.stringify(booking),
            err => {
                if (err) throw err;
                res.status(200).json(booking) 
            }); 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export const getBooking = ( (req, res) => {
    try {
        res.status(200).json(booking)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})