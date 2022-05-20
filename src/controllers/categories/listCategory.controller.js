import listCategorieService from "../../services/category/listCategory.service"

const listCategoriesController = async (request, response) => {
  try {
    const categoriesList = await listCategorieService();

    return response.status(200).json(categoriesList);
  } catch (err) {
    return response.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listCategoriesController;