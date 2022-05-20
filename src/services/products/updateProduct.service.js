import database from "../../database";

const updateProductService = async ( {id, name, price, category_id} ) => {
  console.log(id)
  console.log(name)
  try {
    const idFound = await database.query("SELECT * FROM products WHERE id=$1",[id])
    if(!idFound){
      throw "Id not found"
    }

    const catergoryFound = await database.query("SELECT * FROM categories WHERE id=$1",[category_id])
    if(!catergoryFound){
      throw "Category not found!"
    }
    const [product]=idFound.rows

    name? (product.name=name) : product.name;
    price? (product.price=price) : product.price;
    category_id? (product.category_id=category_id) : product.category_id;

    const res = await database.query(
      "UPDATE products SET name=($1),price=($2),category_id=($3) WHERE id=($4) RETURNING *",
      [product.name,product.price,product.category_id, id]);

    console.log("aqui   ",res)

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;