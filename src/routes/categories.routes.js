import { Router } from "express";
import createCategoryController from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController )
// categoryRouter.get("",(req,res) => categoryController.index(req,res)  )
// categoryRouter.get("/:id",(req,res) => categoryController.show(req,res)  )
// categoryRouter.patch("/:id",(req,res) => categoryController.update(req,res)  )
// categoryRouter.delete("/:id",(req,res) => categoryController.delete(req,res)  )

export default categoryRouter;