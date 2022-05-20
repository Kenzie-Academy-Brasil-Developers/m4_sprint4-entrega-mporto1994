import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductsController = async (request, response) => {
    const {id} =  request.params;
    try {
        
    const product = await deleteProductService({id});
    return response.status(200).json({
        message: "Product deleted!",
        product
    });

  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default deleteProductsController;