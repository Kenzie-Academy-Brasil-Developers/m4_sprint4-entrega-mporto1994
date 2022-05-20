import listByCategoryProductService from "../../services/products/listByCategoryProducts.service"

const listByCategoryProductsController = async (request, response) => {
  const {category_id} = request.params
  try {
    const ProductsList = await listByCategoryProductService({category_id});

    return response.status(200).json(ProductsList);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listByCategoryProductsController;