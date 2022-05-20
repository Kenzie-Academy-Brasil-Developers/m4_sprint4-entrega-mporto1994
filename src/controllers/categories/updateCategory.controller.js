import updateCategoryService from "../../services/category/updateCategory.service"

const updateCategoryController = async (request, response) => {
  const { name } = request.body;
  const {id} = request.params;
  console.log(id)
  console.log(name)
  try {
    const category = await updateCategoryService({id, name});
    console.log(category)

    return response.status(200).json({
        message:"Updated!",
        category
    });

  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default updateCategoryController;