import listOneCategoryService from "../../services/category/listOneCategory.service";

const listOneCategoriesController = async (request, response) => {
    const {id} =  request.params;
    try {
        
    const category = await listOneCategoryService(id);
    return response.status(200).json(category);

  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listOneCategoriesController;