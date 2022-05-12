import express from "express";
import "dotenv/config";
import categoryRouter from "./routes/categories.routes";
import productRouter from "./routes/product.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter)
app.use("/products", productRouter)

export default app.listen(process.env.PORT || 3333, () => {
  console.log("Server running on port 3000");
});
