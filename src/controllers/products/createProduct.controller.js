import createProductService from "../../services/products/createProduct.service"

const createProductController = async (request, response) => {
  const { name,price,category_id } = request.body;
  
  try {
    console.log("aqui")
    const Product = await createProductService({ name,price,category_id });

    return response.status(201).json({
      message: "Product created",
      product:Product,
    });
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default createProductController;