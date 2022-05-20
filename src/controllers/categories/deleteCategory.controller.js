import deleteCategoryService from "../../services/category/deleteCategory.service";

const deleteCategoriesController = async (request, response) => {
    const {id} =  request.params;
    try {
        
    const category = await deleteCategoryService({id});
    return response.status(200).json({
        message: "Category deleted!",
        category
    });

  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default deleteCategoriesController;