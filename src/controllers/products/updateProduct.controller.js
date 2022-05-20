import updateProductService from "../../services/products/updateProduct.service"

const updateProductController = async (request, response) => {
  const { name,price,category_id } = request.body;
  const {id} = request.params;
  // console.log(id)
  // console.log(name)
  try {

    const product = await updateProductService({id, name, price, category_id});
    // console.log(category)

    return response.status(200).json({
        message:"Atualizado",
        product
    });

  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default updateProductController;