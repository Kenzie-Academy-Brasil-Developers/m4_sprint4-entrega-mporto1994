import { Router } from "express";
import createCategoryController    from "../controllers/categories/createCategory.controller";
import deleteCategoriesController  from "../controllers/categories/deleteCategory.controller";
import listCategoriesController    from "../controllers/categories/listCategory.controller";
import listOneCategoriesController from "../controllers/categories/listOneCategory.controller";
import updateCategoryController    from "../controllers/categories/updateCategory.controller";

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController)
categoryRouter.get("",listCategoriesController)
categoryRouter.get("/:id",listOneCategoriesController)
categoryRouter.patch("/:id",updateCategoryController)
categoryRouter.delete("/:id", deleteCategoriesController )

export default categoryRouter;