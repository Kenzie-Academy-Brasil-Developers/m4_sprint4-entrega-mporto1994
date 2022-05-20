import showProductService from "../../services/products/showProduct.service";

const showProductController = async (request, response) => {
    const {id} =  request.params;
    try {
        
    const product = await showProductService({id});
    return response.status(200).json(product);

  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default showProductController;