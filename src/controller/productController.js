
const productModel = require("../model/productModel")
const auth = require("../auth/auth")

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

// post api

const createProduct = async function (req, res) {
    try {
        const body = req.body;
        // console.log(body)
        const { name, quantity, amount } = body;
        // name validation
        if (!isValid(name)) return res.status(400).send({ status: false, msg: "enter a name for adding the product!!" })

        // quantity validation
        if (!isValid(quantity)) return res.status(400).send({ status: false, msg: "enter  quantity for adding the product!!" })
        let reg = /^[0-9]$/
        if (!reg.test(quantity)) return res.status(400).send({ status: false, msg: "quantity should be in number & not a floting number also !!" })

        // amount validation
        if (!isValid(amount)) return res.status(400).send({ status: false, msg: "enter  amount for adding the product!!" })
        let regx = /^\d+((.)|(.\d+)?)$/
        if (!regx.test(amount)) return res.status(400).send({ status: false, msg: "amount should be in number and float value!!" })

        const findProduct = await productModel.findOne({ name: name })
        const findAmount = await productModel.findOne({ amount: amount })

        // update 
        // console.log(quantity)
        if (findProduct && findAmount) {
            let add = findProduct.quantity + quantity;
            let updatedModel = await productModel.updateOne(findProduct, { quantity: add })
            // console.log(updatedModel)
            return res.status(200).send({ status: true, data: updatedModel })

        }
        // create
        const newProduct = await productModel.create(body);
        return res.status(200).send({ status: true, msg: "product created successfully", data: newProduct })

    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }

}


// get api
const getProduct = async function (req, res) {
    try {
        const findProduct = await productModel;
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports.createProduct = createProduct;

