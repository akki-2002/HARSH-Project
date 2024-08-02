const Product = require('../models/ProductModel')

const addProduct = async (req, res) =>{
    const {title, price, description, totalQuantity, deliveryInfo} = req.body
    const productImages = req.body.productImages || req.files?.map(file => file.path);

    try{
        const product = await Product.create({
            title,
            price, 
            description, 
            totalQuantity, 
            deliveryInfo,
            productImages
        })

        res.status(200).json({product})
    }catch(error){
        res.status(400).json({error: error})
    }
}

const getAllProducts = async(req, res)=>{

    try {
        const products = await Product.find({}).sort({createdAt: -1})
        res.status(200).json({products})

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
    
}

    const getProductById = async(req, res)=>{
        const {id} = req.params 

        try{
            const product = await Product.findById(id)
            if(!product)
            {
                return  res.status(404).json('Product Not Found')
            }

            res.status(200).json({product})
        }catch(error){
            res.status(400).json({error: error})
        }
    }

    const updateProduct = async (req, res)=>{
        const data = req.body 
        const {id} = req.params

        try{
            const product = await Product.findByIdAndUpdate(id, data, {new: true})

            if(!product)
            {
                return res.status(404).json("Product Not Found")
            }

            res.status(200).json({product})

        }catch(error){
            res.status(400).json({error: error})
        }
    }

    const deleteProduct = async(req, res)=>{
        const {id} = req.params

        try{
            const product = await Product.findByIdAndDelete(id)

            if(!product)
            {
                return res.status(404).json("Product Not Found")
            }

            res.status(200).json({message: "Deleted product successfully", product})

        }catch(error){
            res.status(400).json({error: error})
        }
    }

module.exports = {addProduct, getAllProducts, getProductById, updateProduct, deleteProduct}