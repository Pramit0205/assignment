const  express  = require("express")
const router = express.Router();
const productController=require("../controller/productController")


router.post("/creatProduct",productController.createProduct)


module.exports=router