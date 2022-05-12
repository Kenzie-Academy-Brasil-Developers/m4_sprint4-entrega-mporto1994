// import createCategory from "../services/category/createCategory.service"

// class categoryController {
//     static async store (req,res){
//         const {name} = req.body;
//         try{
//             const category = await createCategory.service({name})
//             return res.status(201).json(category)
//         }catch(error){
//             return res.status(400).json({message: error.message})}
//     }
    
//     // static async list (req, res) {
//     //     const {categories} = req.body

//     //     try{
//     //         const list = await listCategory
//     //     }catch(){}
//     // }

// }
// export default categoryController;


import createCategorieService from "../services/category/createCategory.service"

const createCategoriesController = async (request, response) => {
  const { name } = request.body;

  try {
      console.log("aqui")
    const category = await createCategorieService({ name });

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