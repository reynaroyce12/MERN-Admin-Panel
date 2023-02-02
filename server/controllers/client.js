import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from '../models/Users.js'
import Transaction from "../models/Transaction.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        const productWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                })
                return {
                    ...product._doc,
                    stat,
                }
            })
        )
        res.status(200).json(productWithStats)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: 'user'}).select('-password')
        res.status(200).json(customers)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}



