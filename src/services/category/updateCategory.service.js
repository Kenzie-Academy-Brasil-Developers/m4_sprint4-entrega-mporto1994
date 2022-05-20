import database from "../../database";

const updateCategoryService = async ( {id, name} ) => {
  console.log(id)
  console.log(name)
  try {
    const categoryAlredyExists = await database.query("SELECT * FROM categories WHERE id=$1",[id]);
    if(categoryAlredyExists.rows.length===0){
      throw "Categoria não encontrada"
    }
    const res = await database.query(
      "UPDATE categories SET name=($1) WHERE id=($2) RETURNING *",[name,id]);
      console.log("aqui   ",res)

      return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;