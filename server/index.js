const express = require("express")
const cors = require("cors")
const Product = require("./db/db")
require("dotenv").config();

const app = express()
const PORT = 3000

app.use(cors());
app.use(express.json());

app.get("/",async(req,res)=>{
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.log("Problem in index",error)
    }
})


app.listen(PORT, () => console.log('Server running on port 3000'));
