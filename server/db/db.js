const mongoose = require("mongoose")
require("dotenv").config({ path: '../.env' });


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connection successful")
})
.catch((error)=>{
    console.log(error)
})

const ProductSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  price: Number,
  description: String,
  benefits: [String],
  details: [String],
  moreDetails: [String],
  images: [String],
  colorOptions: [String],
  sizeOptions: [String],
})


const Product = mongoose.model('Product', ProductSchema);

const newProduct = new Product({
    name: "Embrace Sideboard",
    subtitle: "Teixeira Design Studio",
    price: 71.56,
    description: "When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge.",
    benefits: 
    [
        "Durable leather is easily cleanable so you can keep your look fresh.",
        "Water-repellent finish and internal membrane help keep your feet dry.",
        "Toe piece with star pattern adds durability.",
        "Synthetic insulation helps keep you warm.",
        "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
        "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
        "Rubber outsole with aggressive traction pattern adds durable grip.",
        "Durable leather is easily cleanable so you can keep your look fresh."
    ],
    details: 
    [
        "Not intended for use as Personal Protective Equipment (PPE)",
        "Water-repellent finish and internal membrane help keep your feet dry."
    ],
    moreDetails: 
    [   
        "Lunarlon midsole delivers ultra-plush responsiveness",
        "Encapsulated Air-Sole heel unit for lightweight cushioning",
        "Colour Shown: Ale Brown/Black/Goldtone/Ale Brown",
        "Style: 805899-202"
    ],
    images: [
      "https://rang-bd.com/wp-content/uploads/2023/09/RWR-TPS-00080-2.webp",
      "https://rang-bd.com/wp-content/uploads/2023/09/RWR-TPS-00080-1.webp",
      "https://rang-bd.com/wp-content/uploads/2023/09/RWR-TPS-00080-4.webp"
    ],
    colorOptions:
    [
        "#f7ece1",
        "#cac4ce",
        "#8d86c9",
        "#725ac1",
        "#242038"
    ],
    sizeOptions:
    [
        "Small",
        "Medium",
        "Large",
        "Extra Large",
        "XXL"
    ]
  });

module.exports = Product

  newProduct.save()
  .then(() => console.log('Product saved'))
  .catch(err => console.error('Error saving product:', err));
