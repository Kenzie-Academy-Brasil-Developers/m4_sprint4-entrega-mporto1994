import createCategoryService from "../../services/category/createCategory.service"

const createCategoriesController = async (request, response) => {
  const { name } = request.body;

  try {
      console.log("aqui")
    const category = await createCategoryService({ name });

    return response.status(201).json({
      message: "Category created",
      category,
    });
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default createCategoriesController;