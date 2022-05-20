import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductsController from "../controllers/products/deleteProduct.controller";
import listByCategoryProductsController from "../controllers/products/listByCategoryProduct.controller";
import listProductsController from "../controllers/products/listProduct.controller";
import showProductController from "../controllers/products/showProduct.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const productRouter = Router();


productRouter.post("",createProductController )
productRouter.get("",listProductsController )
productRouter.get("/:id",showProductController )
productRouter.patch("/:id",updateProductController )
productRouter.delete("/:id",deleteProductsController )
productRouter.get("/category/:category_id",listByCategoryProductsController )

// productRouter.get("/category/:category_id",(req,res) )






export default productRouter;